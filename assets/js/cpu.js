const cpuFilterBrand = document.getElementById('cpuFilterBrand');
const cpuFilterCores = document.getElementById('cpuFilterCores');
const cpuFilterClockSpeed = document.getElementById('cpuFilterClockSpeed');
const cpuFilterPrice = document.getElementById('cpuFilterPrice');

const cpuItems = document.querySelectorAll('.cpu-item');

function filterCPUs() {
    const selectedBrand = cpuFilterBrand.value;
    const selectedCores = cpuFilterCores.value;
    const selectedClockSpeed = cpuFilterClockSpeed.value;
    const selectedPrice = cpuFilterPrice.value;

    cpuItems.forEach(item => {
        let showItem = true;

        // Filter by Brand
        if (selectedBrand !== 'all' && !item.classList.contains(selectedBrand)) {
            showItem = false;
        }

        // Filter by Cores
        if (selectedCores !== 'all') {
            const coreCount = parseInt(item.querySelector('.subtitle').textContent.match(/\d+/)[0], 10);
            if (coreCount !== parseInt(selectedCores, 10)) {
                showItem = false;
            }
        }

        // Filter by Clock Speed
        if (selectedClockSpeed !== 'all') {
            const clockSpeed = parseFloat(item.querySelector('.content').textContent.match(/Base Clock Speed:\s*(\d+\.\d+)/)[1]);
            if (clockSpeed < parseFloat(selectedClockSpeed)) {
                showItem = false;
            }
        }

        // Filter by Price
        if (selectedPrice !== 'all') {
            const priceText = item.querySelector('.content').textContent.match(/Price:\s*\$(\d[\d,]*)/);
            if (priceText) {
                const price = parseFloat(priceText[1].replace(',', ''));
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

        // Show or hide the item
        item.style.display = showItem ? 'block' : 'none';
    });
}

// Add event listeners for all filters
cpuFilterBrand.addEventListener('change', filterCPUs);
cpuFilterCores.addEventListener('change', filterCPUs);
cpuFilterClockSpeed.addEventListener('change', filterCPUs);
cpuFilterPrice.addEventListener('change', filterCPUs);