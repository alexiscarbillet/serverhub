import React, { useState } from "react";
import Navbar from './components/Navbar';

const TPUs = [
  {
    name: "Google TPU v2",
    vendor: "Google",
    useCase: "Training and inference for deep learning models",
    performance: "45 TFLOPS (per chip)",
    power: "~280W",
    precision: "FP16, BF16",
  },
  {
    name: "Google TPU v3",
    vendor: "Google",
    useCase: "High-performance training for deep learning",
    performance: "90 TFLOPS (per chip)",
    power: "~450W",
    precision: "FP16, BF16",
  },
  {
    name: "Google TPU v4",
    vendor: "Google",
    useCase: "Cloud AI training and inference",
    performance: "275 TFLOPS (per chip)",
    power: "~600W",
    precision: "BF16, INT8",
  },
  {
    name: "Cloud TPU Edge",
    vendor: "Google",
    useCase: "Lightweight inference at the edge",
    performance: "Tens of TOPS (custom TPU)",
    power: "Low power",
    precision: "INT8 optimized",
  },
  {
    name: "GroqChip 1",
    vendor: "Groq",
    useCase: "Deterministic and ultra-fast AI inference",
    performance: "1 PetaOPS",
    power: "~300W",
    precision: "INT8",
  },
];

const TPU = () => {
  const [search, setSearch] = useState("");

  const filteredTPUs = TPUs.filter((tpu) => {
    const term = search.toLowerCase();
    return (
      tpu.name.toLowerCase().includes(term) ||
      tpu.vendor.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <Navbar />

      <section className="section">
        <div className="container">
          <h1 className="title" style={{ paddingTop: "2%" }}>
            TPU Models
          </h1>

          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Search TPU models..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="columns is-multiline">
            {filteredTPUs.length > 0 ? (
              filteredTPUs.map((tpu, index) => (
                <div className="column is-one-third" key={index}>
                  <div className="box">
                    <h2 className="title is-4">{tpu.name}</h2>
                    <p><strong>Vendor:</strong> {tpu.vendor}</p>
                    <p><strong>Use Case:</strong> {tpu.useCase}</p>
                    <p><strong>Performance:</strong> {tpu.performance}</p>
                    <p><strong>Power Consumption:</strong> {tpu.power}</p>
                    <p><strong>Precision:</strong> {tpu.precision}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No matching TPUs found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TPU;
