import os
import json
import random
import re
from datetime import datetime
from google import genai
from ruamel.yaml import YAML

# 1. Configuration & Client Setup
client = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
yaml = YAML()
yaml.preserve_quotes = True
yaml.indent(mapping=2, sequence=4, offset=2)

CONFIG_PATH = 'mkdocs.yml'
HISTORY_PATH = 'topic_history.json'

# Updated categories to match the new nav structure
FOLDER_MAP = {
    "Market Trends & Buying Guides": "analysis/market",
    "Benchmarks & Performance": "analysis/benchmarks",
    "Homelab & Server Projects": "infrastructure/homelab",
    "Smart Home Hardware": "infrastructure/smart_home"
}

def sanitize_title(title_text):
    return title_text.replace(':', '').replace('#', '').strip()

def slugify(text):
    temp = text.lower().replace(" ", "_").replace("-", "_")
    return re.sub(r'[^a-z0-9_]', '', temp)

def get_new_content():
    if os.path.exists(HISTORY_PATH):
        with open(HISTORY_PATH, 'r') as f:
            history = json.load(f)
    else:
        history = []

    category = random.choice(list(FOLDER_MAP.keys()))
    
    # Advanced Hardware Prompt
    prompt = f"""
    Role: Expert Computer Hardware Architect & Lead Benchmarker.
    Task: Write a deep-dive technical article for a hardware documentation site.
    
    Category: {category}
    Avoid these previous topics: {', '.join(history[-10:])}
    
    Requirements:
    1. Title: Create a professional, SEO-friendly H1 title.
    2. Architecture Focus: Mention specific architectures (e.g., NVIDIA Blackwell, AMD Zen 5, Intel Lunar Lake, ARMv9).
    3. Technical Table: Include a detailed Markdown table comparing 3 relevant hardware components (Specs, TDP, Price, Performance).
    4. Formulas: Use LaTeX for technical calculations (e.g., Memory Bandwidth: $BW = f \times d \times n$).
    5. Tone: Technical, objective, and analytical.
    
    Formatting:
    - Output ONLY raw Markdown.
    - Do NOT use ```markdown code fences.
    - Start directly with the # H1 Title.
    """

    response = client.models.generate_content(
        model="gemini-2.0-flash", 
        contents=prompt
    )
    
    raw_content = response.text.strip()
    
    # Cleaning fences if AI ignores instructions
    raw_content = re.sub(r'^```markdown\n', '', raw_content)
    raw_content = re.sub(r'^```\n', '', raw_content)
    raw_content = re.sub(r'\n```$', '', raw_content)

    lines = raw_content.split('\n')
    raw_title = lines[0].replace('# ', '').strip()
    clean_title = sanitize_title(raw_title)
    lines[0] = f"# {clean_title}"
    
    return category, slugify(clean_title) + ".md", "\n".join(lines), clean_title

def update_nav(category_name, file_path, title):
    with open(CONFIG_PATH, 'r') as f:
        config = yaml.load(f)

    nav = config.get('nav', [])
    
    # Recursive search for the category in the nested nav
    def add_to_nav_recursive(nav_list, target_cat, new_entry):
        for item in nav_list:
            if isinstance(item, dict):
                for key, value in item.items():
                    if key == target_cat:
                        if value is None: item[key] = []
                        item[key].append(new_entry)
                        return True
                    if isinstance(value, list):
                        if add_to_nav_recursive(value, target_cat, new_entry):
                            return True
        return False

    success = add_to_nav_recursive(nav, category_name, {title: file_path})
    
    if not success:
        # Fallback: add to the end of nav if category not found
        nav.append({category_name: [{title: file_path}]})

    with open(CONFIG_PATH, 'w') as f:
        yaml.dump(config, f)

# --- Execution ---
cat, fname, content, title = get_new_content()
relative_folder = FOLDER_MAP[cat]
os.makedirs(f"docs/{relative_folder}", exist_ok=True)

full_path = f"docs/{relative_folder}/{fname}"
with open(full_path, "w") as f:
    f.write(content)

# Update MkDocs Nav with the relative path used by MkDocs
update_nav(cat, f"{relative_folder}/{fname}", title)

# Update history
if os.path.exists(HISTORY_PATH):
    with open(HISTORY_PATH, 'r') as f: history = json.load(f)
else:
    history = []
history.append(title)
with open(HISTORY_PATH, "w") as f: json.dump(history, f)

print(f"Successfully generated: {title} -> {full_path}")