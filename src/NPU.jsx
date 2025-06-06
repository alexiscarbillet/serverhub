import React, { useState } from "react";
import Navbar from './components/Navbar';

const NPUs = [
  {
    name: "Google Edge TPU",
    vendor: "Google",
    useCase: "AI acceleration for IoT and edge computing",
    performance: "4 TOPS (Trillions of Operations Per Second)",
    power: "~2W",
    precision: "INT8 optimized",
  },
  {
    name: "Intel Movidius Myriad X",
    vendor: "Intel",
    useCase: "Computer vision and AI inference",
    performance: "1 TOPS",
    power: "1W",
    precision: "FP16 and INT8",
  },
  {
    name: "Apple Neural Engine",
    vendor: "Apple",
    useCase: "AI processing for iPhones, iPads, and Macs",
    performance: "35 TOPS (A17 Pro)",
    power: "Integrated in SoC, optimized for low power",
    precision: "Mixed precision (INT8, FP16, FP32)",
  },
  {
    name: "Huawei Ascend 910",
    vendor: "Huawei",
    useCase: "AI model training and high-performance computing",
    performance: "256 TFLOPS (FP16), 512 TOPS (INT8)",
    power: "~310W",
    precision: "FP16, INT8",
  },
  {
    name: "Qualcomm Hexagon",
    vendor: "Qualcomm",
    useCase: "AI acceleration in Snapdragon mobile chips",
    performance: "45 TOPS (Snapdragon 8 Gen 3)",
    power: "Integrated in SoC, low power",
    precision: "Mixed precision (INT4, INT8, FP16)",
  },
  {
    name: "Samsung Exynos NPU",
    vendor: "Samsung",
    useCase: "AI tasks in Samsung Exynos processors",
    performance: "40 TOPS (Exynos 2400)",
    power: "Integrated in SoC",
    precision: "INT8, FP16",
  },
];

const NPU = () => {
  const [search, setSearch] = useState("");

  const filteredNPUs = NPUs.filter((npu) => {
    const term = search.toLowerCase();
    return (
      npu.name.toLowerCase().includes(term) ||
      npu.vendor.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <Navbar />

      <section className="section">
        <div className="container">
          <h1 className="title" style={{ paddingTop: "2%" }}>
            NPU Models
          </h1>

          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Search NPU models..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="columns is-multiline">
            {filteredNPUs.length > 0 ? (
              filteredNPUs.map((npu, index) => (
                <div className="column is-one-third" key={index}>
                  <div className="box">
                    <h2 className="title is-4">{npu.name}</h2>
                    <p><strong>Vendor:</strong> {npu.vendor}</p>
                    <p><strong>Use Case:</strong> {npu.useCase}</p>
                    <p><strong>Performance:</strong> {npu.performance}</p>
                    <p><strong>Power Consumption:</strong> {npu.power}</p>
                    <p><strong>Precision:</strong> {npu.precision}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No matching NPUs found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NPU;
