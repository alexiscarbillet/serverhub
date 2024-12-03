const motherboardFilterFormFactor = document.getElementById('motherboardFilterFormFactor');
const motherboardFilterSocket = document.getElementById('motherboardFilterSocket');
const motherboardFilterChipset = document.getElementById('motherboardFilterChipset');
const motherboardFilterPrice = document.getElementById('motherboardFilterPrice');

function filterMotherboards() {
    const selectedFormFactor = motherboardFilterFormFactor.value;
    const selectedSocket = motherboardFilterSocket.value;
    const selectedChipset = motherboardFilterChipset.value;
    const selectedPrice = motherboardFilterPrice.value;
    
    const motherboardItems = document.querySelectorAll('.motherboard-item');

    motherboardItems.forEach(item => {
        let showItem = true;

        // Filter by Form Factor
        if (selectedFormFactor !== 'all' && !item.classList.contains(selectedFormFactor)) {
            showItem = false;
        }

        // Filter by Socket Type
        if (selectedSocket !== 'all' && !item.classList.contains(selectedSocket)) {
            showItem = false;
        }

        // Filter by Chipset
        if (selectedChipset !== 'all' && !item.classList.contains(selectedChipset)) {
            showItem = false;
        }

        // Filter by Price
        if (selectedPrice !== 'all') {
            const price = parseFloat(item.querySelector('.content p').textContent.match(/\$\d+/)[0].slice(1));
            if (price > parseFloat(selectedPrice)) {
                showItem = false;
            }
        }

        item.style.display = showItem ? 'block' : 'none';
    });
}

motherboardFilterFormFactor.addEventListener('change', filterMotherboards);
motherboardFilterSocket.addEventListener('change', filterMotherboards);
motherboardFilterChipset.addEventListener('change', filterMotherboards);
motherboardFilterPrice.addEventListener('change', filterMotherboards);