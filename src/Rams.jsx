import React, { useState } from 'react';
import Navbar from './components/Navbar';

const ramProducts = [
  {
    id: 1,
    title: 'Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz',
    brand: 'Corsair',
    capacity: '16',
    speed: '3200',
    latency: 'CL16',
    price: '$65',
  },
  {
    id: 2,
    title: 'G.SKILL Trident Z RGB 32GB (2x16GB) DDR4 3600MHz',
    brand: 'G.SKILL',
    capacity: '32',
    speed: '3600',
    latency: 'CL16',
    price: '$145',
  },
  {
    id: 3,
    title: 'Kingston HyperX Fury 8GB (1x8GB) DDR4 2666MHz',
    brand: 'Kingston',
    capacity: '8',
    speed: '2666',
    latency: 'CL16',
    price: '$35',
  },
  {
    id: 4,
    title: 'Crucial Ballistix 16GB (2x8GB) DDR4 3600MHz',
    brand: 'Crucial',
    capacity: '16',
    speed: '3600',
    latency: 'CL16',
    price: '$75',
  },
  {
    id: 5,
    title: 'Corsair Vengeance LPX 32GB (2x16GB) DDR4 3000MHz',
    brand: 'Corsair',
    capacity: '32',
    speed: '3000',
    latency: 'CL15',
    price: '$115',
  },
  {
    id: 6,
    title: 'HyperX Predator 16GB (2x8GB) DDR4 3200MHz',
    brand: 'HyperX',
    capacity: '16',
    speed: '3200',
    latency: 'CL16',
    price: '$90',
  },
  {
    id: 7,
    title: 'G.SKILL Ripjaws V 16GB (2x8GB) DDR4 3600MHz',
    brand: 'G.SKILL',
    capacity: '16',
    speed: '3600',
    latency: 'CL16',
    price: '$80',
  },
];

const RamModels = () => {
  const [filters, setFilters] = useState({
    capacity: 'all',
    speed: 'all',
    latency: 'all',
    brand: 'all',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFilters((prev) => ({ ...prev, [id]: value }));
  };

  const filteredProducts = ramProducts.filter((product) => {
    return (
      (filters.capacity === 'all' || product.capacity === filters.capacity) &&
      (filters.speed === 'all' || product.speed === filters.speed) &&
      (filters.latency === 'all' || product.latency === filters.latency) &&
      (filters.brand === 'all' || product.brand === filters.brand)
    );
  });

  return (
    <>
    <Navbar />
    <div className="section">
      <div className="container">
        <br></br>
        <h1 className="title">RAM</h1>
        <p>
          Random Access Memory (RAM) is essential for the smooth operation of your PC. It stores data temporarily for quick access, enabling faster performance during multitasking.
        </p>
        <h2 className="subtitle">Key Features of RAM</h2>
        <p><strong>Capacity:</strong> The more RAM, the better your system can handle multitasking. Common capacities are 8GB, 16GB, and 32GB.</p>
        <p><strong>Speed:</strong> Measured in MHz, higher speeds like 3200MHz or 3600MHz offer better performance.</p>
        <p><strong>Latency:</strong> Lower latency (CL16 vs CL18) means faster access times.</p>

        {/* Filters */}
        <div className="filters-container">
          {[
            { label: 'Capacity', id: 'capacity', options: ['8', '16', '32', '64'] },
            { label: 'Speed', id: 'speed', options: ['2666', '3000', '3200', '3600', '4000'] },
            { label: 'Latency', id: 'latency', options: ['CL15', 'CL16', 'CL18'] },
            { label: 'Brand', id: 'brand', options: ['Corsair', 'G.SKILL', 'Kingston', 'Crucial', 'HyperX', 'Patriot', 'TeamGroup'] },
          ].map(({ label, id, options }) => (
            <div className="field" key={id}>
              <label className="label">Filter by {label}</label>
              <div className="control">
                <div className="select">
                  <select id={id} value={filters[id]} onChange={handleChange}>
                    <option value="all">All</option>
                    {options.map((opt) => (
                      <option key={opt} value={opt}>{opt} {label === 'Speed' ? 'MHz' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product List */}
        <div id="ramList">
          {filteredProducts.map((ram) => (
            <div key={ram.id} className={`ram-item ${ram.brand}`}>
              <div className="card">
                <div className="card-content">
                  <p className="title">{ram.title}</p>
                  <div className="ram-specs">
                    <strong>Capacity:</strong> {ram.capacity}GB<br />
                    <strong>Speed:</strong> {ram.speed}MHz<br />
                    <strong>Latency:</strong> {ram.latency}
                  </div>
                  <p><strong>Price:</strong> {ram.price}</p>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && <p>No RAM modules match the selected filters.</p>}
        </div>
      </div>
    </div>
    </>
  );
};

export default RamModels;
