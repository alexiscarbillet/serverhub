import React, { useState } from 'react';
import Navbar from './components/Navbar';


const Disks = () => {
  const [typeFilter, setTypeFilter] = useState("all");
  const [capacityFilter, setCapacityFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const disks = [
    {
      title: "Seagate Barracuda 1TB HDD",
      subtitle: "1 TB, 7200 RPM",
      type: "HDD",
      capacity: "1TB",
      price: 50,
      speed: "7200 RPM",
    },
    {
      title: "Samsung 970 EVO Plus 1TB SSD",
      subtitle: "1 TB, NVMe M.2",
      type: "SSD",
      capacity: "1TB",
      price: 120,
      speed: "3500 MB/s Read",
    },
    {
      title: "Western Digital Blue 2TB HDD",
      subtitle: "2 TB, 5400 RPM",
      type: "HDD",
      capacity: "2TB",
      price: 75,
      speed: "5400 RPM",
    },
    {
      title: "Crucial MX500 500GB SSD",
      subtitle: "500 GB, SATA III",
      type: "SSD",
      capacity: "500GB",
      price: 60,
      speed: "560 MB/s Read",
    },
  ];

  const filterDisk = (disk) => {
    return (
      (typeFilter === "all" || disk.type === typeFilter) &&
      (capacityFilter === "all" || disk.capacity === capacityFilter) &&
      (priceFilter === "all" || disk.price <= parseInt(priceFilter))
    );
  };

  return (
    <div>
      <Navbar />

      {/* Intro */}
      <section className="section">
        <div className="container">
          <h1 className="title" style={{ paddingTop: "3%" }}>
            Disks - HDD and SSD
          </h1>
          <p>
            Learn about the two main types of storage disks used in computers
            and servers: Hard Disk Drives (HDD) and Solid-State Drives (SSD).
          </p>
          <h2 className="subtitle">Types of Disks</h2>
          <p>
            <strong>HDD:</strong> Traditional device using spinning platters and
            a read/write head. Large but slower.
          </p>
          <p>
            <strong>SSD:</strong> Flash memory-based storage with no moving
            parts. Faster and more durable.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="section">
        <div className="container filter-container">
          <div className="columns">
            {/* Type */}
            <div className="column">
              <div className="field">
                <label className="label">Filter by Type</label>
                <div className="control select">
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="HDD">HDD</option>
                    <option value="SSD">SSD</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Capacity */}
            <div className="column">
              <div className="field">
                <label className="label">Filter by Capacity</label>
                <div className="control select">
                  <select
                    value={capacityFilter}
                    onChange={(e) => setCapacityFilter(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="500GB">500 GB</option>
                    <option value="1TB">1 TB</option>
                    <option value="2TB">2 TB</option>
                    <option value="4TB">4 TB</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="column">
              <div className="field">
                <label className="label">Filter by Price</label>
                <div className="control select">
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                  >
                    <option value="all">All</option>
                    <option value="100">Up to $100</option>
                    <option value="300">Up to $300</option>
                    <option value="500">Up to $500</option>
                    <option value="1000">Up to $1,000</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Listings */}
      <section className="section">
        <div className="container">
          <div id="diskList">
            {disks.filter(filterDisk).map((disk, index) => (
              <div className={`disk-item ${disk.type}`} key={index}>
                <div className="card">
                  <div className="card-content">
                    <p className="title">{disk.title}</p>
                    <p className="subtitle">{disk.subtitle}</p>
                    <div className="content">
                      <p>
                        <strong>Type:</strong> {disk.type}
                      </p>
                      <p>
                        <strong>Capacity:</strong> {disk.capacity}
                      </p>
                      <p>
                        <strong>Price:</strong> ${disk.price}
                      </p>
                      <p>
                        <strong>Speed:</strong> {disk.speed}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {disks.filter(filterDisk).length === 0 && (
              <p>No disks match the selected filters.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disks;
