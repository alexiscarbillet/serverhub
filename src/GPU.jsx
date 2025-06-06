import React, { useState } from "react";
import Navbar from './components/Navbar';

const GPU = () => {
  const [filters, setFilters] = useState({
    brand: "all",
    memory: "all",
    price: "all",
    clock: "all",
    tdp: "all",
    cores: "all",
  });

  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [id.replace("gpuFilter", "").toLowerCase()]: value,
    }));
  };

  const gpuData = [
    {
        brand: "NVIDIA",
        name: "NVIDIA A100",
        memory: "40",
        clock: 1.41,
        cores: 6912,
        tdp: 400,
        price: 10000,
        useCase: "AI, deep learning, and high-performance computing.",
    },
    {
        brand: "NVIDIA",
        name: "NVIDIA V100",
        memory: "32",
        clock: 1.53,
        cores: 5120,
        tdp: 300,
        price: 9000,
        useCase: "Deep learning, data science, and HPC applications.",
    },
    {
        brand: "NVIDIA",
        name: "NVIDIA T4",
        memory: "16",
        clock: 1.59,
        cores: 2560,
        tdp: 70,
        price: 2500,
        useCase: "Inference, video transcoding, and virtual desktops.",
    },
    {
        brand: "AMD",
        name: "AMD Radeon Pro VII",
        memory: "16",
        clock: 1.7,
        cores: 3840,
        tdp: 250,
        price: 2000,
        useCase: "Media, entertainment, and engineering workloads.",
    },
    {
        brand: "AMD",
        name: "AMD Radeon Instinct MI100",
        memory: "32",
        clock: 1.5,
        cores: 7680,
        tdp: 300,
        price: 6000,
        useCase: "High-performance computing and AI training.",
    },
    {
        brand: "AMD",
        name: "AMD Radeon RX 6900 XT",
        memory: "16",
        clock: 1.82,
        cores: 5120,
        tdp: 300,
        price: 1500,
        useCase: "Gaming at 4K, high-end content creation.",
    },
    {
        brand: "AWS",
        name: "AWS EC2 P3",
        memory: "16",
        clock: 1.53,
        cores: 5120,
        tdp: 300,
        price: 3.06,
        useCase: "Deep learning, data analysis, and scientific computing.",
    },
    {
        brand: "AWS",
        name: "AWS EC2 G4",
        memory: "16",
        clock: 1.56,
        cores: 2560,
        tdp: 70,
        price: 0.526,
        useCase: "Machine learning inference and graphics-intensive apps.",
    },
    {
        brand: "AWS",
        name: "AWS EC2 Inf1",
        memory: "16",
        clock: 1.0,
        cores: 2000,
        tdp: 75,
        price: 0.4,
        useCase: "High-throughput inference for deep learning models.",
    },
  ];

  const filterGPU = (gpu) => {
    const {
      brand,
      memory,
      price,
      clock,
      tdp,
      cores,
    } = filters;

    const matchesBrand = brand === "all" || gpu.brand.toLowerCase() === brand;
    const matchesMemory =
      memory === "all" || parseInt(gpu.memory) >= parseInt(memory);
    const matchesPrice =
      price === "all" ||
      (price === "1000" && gpu.price <= 1000) ||
      (price === "5000" && gpu.price <= 5000) ||
      (price === "10000" && gpu.price <= 10000) ||
      (price === "above10000" && gpu.price > 10000);
    const matchesClock =
      clock === "all" || gpu.clock >= parseFloat(clock);
    const matchesTDP =
      tdp === "all" ||
      (tdp === "300" && gpu.tdp <= 300) ||
      (tdp === "400" && gpu.tdp <= 400) ||
      (tdp === "above400" && gpu.tdp > 400);
    const matchesCores =
      cores === "all" || gpu.cores >= parseInt(cores);

    return (
      matchesBrand &&
      matchesMemory &&
      matchesPrice &&
      matchesClock &&
      matchesTDP &&
      matchesCores
    );
  };

  const filteredGPUs = gpuData.filter(filterGPU);

  const filterOptions = {
    brand: ["All", "NVIDIA", "AMD", "AWS"],
    memory: ["All", "8", "16", "24", "32"],
    price: ["All", "1000", "5000", "10000", "above10000"],
    clock: ["All", "1.4", "1.5", "1.6"],
    tdp: ["All", "300", "400", "above400"],
    cores: ["All", "4000", "5000", "10000"],
  };

  return (
    <>
    <Navbar />
    <div className="container" style={{ marginTop: "3%" }}>
      <h2 className="title is-4">GPU Catalog</h2>

      {/* Filters */}
      <div className="columns filter-column" style={{ marginLeft: "3%" }}>
        {Object.entries(filterOptions).map(([key, options]) => (
          <div className="column is-narrow" key={key}>
            <div className="field">
              <label className="label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <div className="control">
                <div className="select">
                  <select
                    id={`gpuFilter${key.charAt(0).toUpperCase() + key.slice(1)}`}
                    onChange={handleFilterChange}
                    value={filters[key]}
                  >
                    {options.map((opt) => (
                      <option
                        key={opt}
                        value={opt.toLowerCase().replace(/[^a-z0-9]/g, "")}
                      >
                        {opt === "All"
                          ? "All"
                          : key === "price"
                          ? opt === "above10000"
                            ? "Above $10000"
                            : `Up to $${opt}`
                          : key === "clock"
                          ? `Above ${opt} GHz`
                          : key === "tdp"
                          ? opt === "above400"
                            ? "Above 400W"
                            : `Up to ${opt}W`
                          : key === "cores"
                          ? `Above ${opt} Cores`
                          : `${opt} GB`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* GPU List */}
      <div className="columns is-multiline" style={{ marginLeft: "3%" }}>
        {filteredGPUs.length > 0 ? (
          filteredGPUs.map((gpu, index) => (
            <div className="column is-one-third" key={index}>
              <div className="card">
                <div className="card-content">
                  <p className="title is-5">{gpu.name}</p>
                  <p><strong>Brand:</strong> {gpu.brand}</p>
                  <p><strong>VRAM:</strong> {gpu.memory} GB</p>
                  <p><strong>Clock:</strong> {gpu.clock} GHz</p>
                  <p><strong>CUDA/Compute Units:</strong> {gpu.cores}</p>
                  <p><strong>TDP:</strong> {gpu.tdp} W</p>
                  <p><strong>Price:</strong> ${gpu.price}</p>
                  <p><strong>Use Case:</strong> {gpu.useCase}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ marginLeft: "3%" }}>No GPUs match the selected filters.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default GPU;
