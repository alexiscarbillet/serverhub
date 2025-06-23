import React, { useState } from "react";
import Navbar from './components/Navbar';

const VPUs = [
  {
    name: "Intel Movidius Myriad 2",
    vendor: "Intel",
    useCase: "Low-power computer vision for drones, cameras, and edge devices",
    performance: "100 GFLOPS",
    power: "~1W",
    precision: "FP16",
  },
  {
    name: "Intel Movidius Myriad X",
    vendor: "Intel",
    useCase: "Advanced computer vision and AI inference",
    performance: "1 TOPS",
    power: "~1W",
    precision: "FP16, INT8",
  },
  {
    name: "Qualcomm Spectra ISP + VPU",
    vendor: "Qualcomm",
    useCase: "Image processing in mobile platforms",
    performance: "Integrated in Snapdragon SoCs",
    power: "Integrated in SoC",
    precision: "Mixed (FP16, INT8)",
  },
  {
    name: "Himax WE-I Plus",
    vendor: "Himax",
    useCase: "Ultralow-power always-on vision sensing",
    performance: "Inferencing <1 FPS",
    power: "<1 mW",
    precision: "INT8",
  },
  {
    name: "Synaptics VS680",
    vendor: "Synaptics",
    useCase: "Edge vision processing with AI inference",
    performance: "1.6 TOPS",
    power: "~1.5W",
    precision: "INT8, FP16",
  },
];

const VPU = () => {
  const [search, setSearch] = useState("");

  const filteredVPUs = VPUs.filter((vpu) => {
    const term = search.toLowerCase();
    return (
      vpu.name.toLowerCase().includes(term) ||
      vpu.vendor.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <Navbar />

      <section className="section">
        <div className="container">
          <h1 className="title" style={{ paddingTop: "2%" }}>
            VPU Models
          </h1>

          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Search VPU models..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="columns is-multiline">
            {filteredVPUs.length > 0 ? (
              filteredVPUs.map((vpu, index) => (
                <div className="column is-one-third" key={index}>
                  <div className="box">
                    <h2 className="title is-4">{vpu.name}</h2>
                    <p><strong>Vendor:</strong> {vpu.vendor}</p>
                    <p><strong>Use Case:</strong> {vpu.useCase}</p>
                    <p><strong>Performance:</strong> {vpu.performance}</p>
                    <p><strong>Power Consumption:</strong> {vpu.power}</p>
                    <p><strong>Precision:</strong> {vpu.precision}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No matching VPUs found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VPU;
