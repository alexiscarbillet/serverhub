const diskFilterType = document.getElementById('diskFilterType');
const diskFilterCapacity = document.getElementById('diskFilterCapacity');
const diskFilterPrice = document.getElementById('diskFilterPrice');

const diskItems = document.querySelectorAll('.disk-item');

function filterDisks() {
    const selectedType = diskFilterType.value;
    const selectedCapacity = diskFilterCapacity.value;
    const selectedPrice = diskFilterPrice.value;

    diskItems.forEach(item => {
        let showItem = true;

        // Filter by Type
        if (selectedType !== 'all' && !item.classList.contains(selectedType)) {
            showItem = false;
        }

        // Filter by Capacity
        if (selectedCapacity !== 'all') {
            const capacity = item.querySelector('.subtitle').textContent.match(/\d+\s*(GB|TB)/);
            if (capacity && capacity[0] !== selectedCapacity) {
                showItem = false;
            }
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

diskFilterType.addEventListener('change', filterDisks);
diskFilterCapacity.addEventListener('change', filterDisks);
diskFilterPrice.addEventListener('change', filterDisks);