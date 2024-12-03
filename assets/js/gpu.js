const gpuFilterBrand = document.getElementById('gpuFilterBrand');
const gpuFilterMemory = document.getElementById('gpuFilterMemory');
const gpuFilterPrice = document.getElementById('gpuFilterPrice');
const gpuFilterClockSpeed = document.getElementById('gpuFilterClockSpeed');
const gpuFilterTDP = document.getElementById('gpuFilterTDP');
const gpuFilterCores = document.getElementById('gpuFilterCores');
const gpuList = document.getElementById('gpuList');

// Function to filter GPUs
function filterGPUs() {
    const selectedBrand = gpuFilterBrand.value;
    const selectedMemory = gpuFilterMemory.value;
    const selectedPrice = gpuFilterPrice.value;
    const selectedClockSpeed = gpuFilterClockSpeed.value;
    const selectedTDP = gpuFilterTDP.value;
    const selectedCores = gpuFilterCores.value;

    const gpuItems = gpuList.querySelectorAll('.gpu-item');

    gpuItems.forEach(item => {
        let showItem = true;

        // Filter by Brand
        if (selectedBrand !== 'all' && !item.classList.contains(selectedBrand)) {
            showItem = false;
        }

        // Filter by Memory
        if (selectedMemory !== 'all') {
            const memoryText = item.querySelector('.content').textContent.match(/(\d+)\s*GB/);
            if (memoryText) {
                const memory = parseInt(memoryText[1]);
                if (selectedMemory === '8' && memory < 8) {
                    showItem = false;
                } else if (selectedMemory === '16' && memory < 16) {
                    showItem = false;
                } else if (selectedMemory === '24' && memory < 24) {
                    showItem = false;
                } else if (selectedMemory === '32' && memory < 32) {
                    showItem = false;
                }
            }
        }

        // Filter by Price
        if (selectedPrice !== 'all') {
            const priceText = item.querySelector('.content').textContent.match(/Price:\s*\$([\d,]+)/);
            if (priceText) {
                const price = parseInt(priceText[1].replace(',', ''));
                if (selectedPrice === '1000' && price > 1000) {
                    showItem = false;
                } else if (selectedPrice === '5000' && price > 5000) {
                    showItem = false;
                } else if (selectedPrice === '10000' && price > 10000) {
                    showItem = false;
                } else if (selectedPrice === '10000+' && price <= 10000) {
                    showItem = false;
                }
            }
        }

        // Filter by Base Clock Speed
        if (selectedClockSpeed !== 'all') {
            const clockSpeedText = item.querySelector('.content').textContent.match(/Base Clock Speed:\s*([\d.]+)/);
            if (clockSpeedText) {
                const clockSpeed = parseFloat(clockSpeedText[1]);
                if (selectedClockSpeed === '1.4' && clockSpeed < 1.4) {
                    showItem = false;
                } else if (selectedClockSpeed === '1.5' && clockSpeed < 1.5) {
                    showItem = false;
                } else if (selectedClockSpeed === '1.6' && clockSpeed < 1.6) {
                    showItem = false;
                }
            }
        }

        // Filter by TDP
        if (selectedTDP !== 'all') {
            const tdpText = item.querySelector('.content').textContent.match(/TDP:\s*(\d+)/);
            if (tdpText) {
                const tdp = parseInt(tdpText[1]);
                if (selectedTDP === '300' && tdp > 300) {
                    showItem = false;
                } else if (selectedTDP === '400' && tdp > 400) {
                    showItem = false;
                } else if (selectedTDP === '1000' && tdp <= 400) {
                    showItem = false;
                }
            }
        }

        // Filter by CUDA Cores / Compute Units
        if (selectedCores !== 'all') {
            const coresText = item.querySelector('.content').textContent.match(/(CUDA Cores|Compute Units):\s*(\d+)/);
            if (coresText) {
                const cores = parseInt(coresText[2]);
                if (selectedCores === '4000' && cores < 4000) {
                    showItem = false;
                } else if (selectedCores === '5000' && cores < 5000) {
                    showItem = false;
                } else if (selectedCores === '10000' && cores < 10000) {
                    showItem = false;
                }
            }
        }

        // Show or hide the item
        item.style.display = showItem ? 'block' : 'none';
    });
}

// Add event listeners for all filters
gpuFilterBrand.addEventListener('change', filterGPUs);
gpuFilterMemory.addEventListener('change', filterGPUs);
gpuFilterPrice.addEventListener('change', filterGPUs);
gpuFilterClockSpeed.addEventListener('change', filterGPUs);
gpuFilterTDP.addEventListener('change', filterGPUs);
gpuFilterCores.addEventListener('change', filterGPUs);

// Initial filter to display all GPUs
filterGPUs();