// JavaScript for filtering RAM items by capacity, speed, latency, and brand
document.getElementById('ramFilterCapacity').addEventListener('change', filterRAM);
document.getElementById('ramFilterSpeed').addEventListener('change', filterRAM);
document.getElementById('ramFilterLatency').addEventListener('change', filterRAM);
document.getElementById('ramFilterBrand').addEventListener('change', filterRAM);

function filterRAM() {
    const capacity = document.getElementById('ramFilterCapacity').value;
    const speed = document.getElementById('ramFilterSpeed').value;
    const latency = document.getElementById('ramFilterLatency').value;
    const brand = document.getElementById('ramFilterBrand').value;
    const ramItems = document.querySelectorAll('.ram-item');

    ramItems.forEach(item => {
        let show = true;

        // Check capacity filter
        if (capacity !== 'all' && !item.querySelector('.title').textContent.includes(capacity + 'GB')) {
            show = false;
        }

        // Check speed filter
        if (speed !== 'all' && !item.querySelector('.title').textContent.includes(speed + 'MHz')) {
            show = false;
        }

        // Check latency filter
        if (latency !== 'all' && !item.querySelector('.title').textContent.includes(latency)) {
            show = false;
        }

        // Check brand filter
        if (brand !== 'all' && !item.classList.contains(brand)) {
            show = false;
        }

        item.style.display = show ? 'block' : 'none';
    });
}