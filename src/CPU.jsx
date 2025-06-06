import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

const CPU = () => {
  const [brand, setBrand] = useState('all');
  const [cores, setCores] = useState('all');
  const [clockSpeed, setClockSpeed] = useState('all');
  const [price, setPrice] = useState('all');
  const [filteredCPUs, setFilteredCPUs] = useState([]);

  const cpus = [
    {
      brand: 'Intel',
      title: 'Intel Xeon Bronze 3206R',
      cores: 8,
      threads: 8,
      base: 2.1,
      turbo: 3.4,
      cache: '11 MB',
      tdp: 85,
      socket: 'LGA 3647',
      price: 500,
      useCase: 'Entry-level server tasks, cloud computing, and small-scale data centers.',
    },
    {
      brand: 'Intel',
      title: 'Intel Xeon Gold 6248',
      cores: 20,
      threads: 40,
      base: 2.5,
      turbo: 3.9,
      cache: '27.5 MB',
      tdp: 150,
      socket: 'LGA 3647',
      price: 2200,
      useCase: 'High-performance computing, cloud computing, and enterprise data centers.',
    },
    {
      brand: 'AMD',
      title: 'AMD EPYC 7742',
      cores: 64,
      threads: 128,
      base: 2.25,
      turbo: 3.4,
      cache: '256 MB',
      tdp: 225,
      socket: 'SP3',
      price: 7500,
      useCase: 'Ideal for high-performance computing, data centers, and cloud infrastructures.',
    },
    {
      brand: 'AWS',
      title: 'AWS Graviton2',
      cores: 64,
      threads: null,
      base: 2.5,
      turbo: null,
      cache: 'N/A',
      tdp: 'N/A',
      socket: 'AWS Custom',
      price: 0,
      useCase: 'Cost-effective cloud computing, optimized for AWS workloads.',
    },
    // Add more CPUs here...
  ];

  useEffect(() => {
    const result = cpus.filter(cpu => {
      const matchBrand = brand === 'all' || cpu.brand === brand;
      const matchCores = cores === 'all' || cpu.cores === parseInt(cores);
      const matchClock = clockSpeed === 'all' || cpu.base >= parseFloat(clockSpeed);
      const matchPrice =
        price === 'all' ||
        (price === '1000' && cpu.price <= 1000) ||
        (price === '5000' && cpu.price <= 5000) ||
        (price === '10000' && cpu.price <= 10000) ||
        (price === '10000+' && cpu.price > 10000);
      return matchBrand && matchCores && matchClock && matchPrice;
    });
    setFilteredCPUs(result);
  }, [brand, cores, clockSpeed, price]);

  return (
    <div>
      <Navbar />

      <section className="section" style={{ paddingTop: '5rem' }}>
        <p>
          The Central Processing Unit (CPU) is the brain of a computer. It performs the instructions of a computer
          program by performing basic arithmetic, logic, control, and input/output operations specified by the
          instructions. CPUs handle general-purpose computing tasks and are critical to a computer's overall
          performance.
        </p>

        <h3 className="title is-4 mt-4">Key Features of a CPU</h3>
        <ul>
          <li><strong>Clock Speed:</strong> Measured in GHz. Higher means faster instruction processing.</li>
          <li><strong>Core Count:</strong> More cores = better multitasking.</li>
          <li><strong>Threads:</strong> Multiple threads per core improve parallelism.</li>
          <li><strong>Cache:</strong> Small fast memory inside CPU to reduce latency.</li>
          <li><strong>TDP:</strong> Indicates power usage and cooling needs.</li>
        </ul>
      </section>

      <section className="section">
        <div className="columns is-multiline mb-5">
          <div className="column is-one-quarter">
            <label className="label">Filter by Brand</label>
            <div className="select is-fullwidth">
              <select onChange={(e) => setBrand(e.target.value)} value={brand}>
                <option value="all">All</option>
                <option value="Intel">Intel</option>
                <option value="AMD">AMD</option>
                <option value="AWS">AWS</option>
              </select>
            </div>
          </div>

          <div className="column is-one-quarter">
            <label className="label">Filter by Cores</label>
            <div className="select is-fullwidth">
              <select onChange={(e) => setCores(e.target.value)} value={cores}>
                <option value="all">All</option>
                <option value="8">8 Cores</option>
                <option value="16">16 Cores</option>
                <option value="20">20 Cores</option>
                <option value="28">28 Cores</option>
                <option value="40">40 Cores</option>
                <option value="64">64 Cores</option>
              </select>
            </div>
          </div>

          <div className="column is-one-quarter">
            <label className="label">Filter by Clock Speed</label>
            <div className="select is-fullwidth">
              <select onChange={(e) => setClockSpeed(e.target.value)} value={clockSpeed}>
                <option value="all">All</option>
                <option value="2.0">2.0 GHz</option>
                <option value="2.5">2.5 GHz</option>
                <option value="3.0">3.0 GHz</option>
                <option value="3.5">3.5 GHz</option>
                <option value="4.0">4.0 GHz</option>
              </select>
            </div>
          </div>

          <div className="column is-one-quarter">
            <label className="label">Filter by Price</label>
            <div className="select is-fullwidth">
              <select onChange={(e) => setPrice(e.target.value)} value={price}>
                <option value="all">All</option>
                <option value="1000">Up to $1,000</option>
                <option value="5000">Up to $5,000</option>
                <option value="10000">Up to $10,000</option>
                <option value="10000+">Above $10,000</option>
              </select>
            </div>
          </div>
        </div>

        <div className="columns is-multiline">
          {filteredCPUs.length === 0 && (
            <div className="column is-12">
              <p>No CPUs match the selected filters.</p>
            </div>
          )}
          {filteredCPUs.map((cpu, index) => (
            <div key={index} className="column is-one-third">
              <div className="card">
                <div className="card-content">
                  <p className="title">{cpu.title}</p>
                  <p className="subtitle">
                    {cpu.cores} cores{cpu.threads ? `, ${cpu.threads} threads` : ''}
                  </p>
                  <div className="content">
                    <p><strong>Base Clock Speed:</strong> {cpu.base} GHz</p>
                    {cpu.turbo && <p><strong>Max Turbo:</strong> {cpu.turbo} GHz</p>}
                    <p><strong>Cache:</strong> {cpu.cache}</p>
                    <p><strong>TDP:</strong> {cpu.tdp}</p>
                    <p><strong>Socket:</strong> {cpu.socket}</p>
                    <p><strong>Price:</strong> ${cpu.price > 0 ? cpu.price : 'Variable'}</p>
                    <p><strong>Use Case:</strong> {cpu.useCase}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CPU;
