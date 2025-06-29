import React, { useState } from "react";
import Navbar from './components/Navbar';

const ASICSoftwares = [
  {
    name: "Synopsys Design Compiler",
    vendor: "Synopsys",
    useCase: "Logic synthesis of RTL code into gate-level netlists",
    supportedLanguages: "Verilog, VHDL",
    keyFeature: "Highly optimized synthesis for ASIC design",
  },
  {
    name: "Cadence Genus",
    vendor: "Cadence",
    useCase: "RTL synthesis and design exploration",
    supportedLanguages: "Verilog, SystemVerilog",
    keyFeature: "Power, performance, area (PPA) optimization",
  },
  {
    name: "Mentor Precision",
    vendor: "Siemens EDA",
    useCase: "RTL synthesis and physical-aware design",
    supportedLanguages: "VHDL, Verilog",
    keyFeature: "Support for multi-Vt and low-power synthesis",
  },
  {
    name: "Yosys",
    vendor: "Open Source",
    useCase: "Open-source synthesis framework for ASIC/FPGA",
    supportedLanguages: "Verilog",
    keyFeature: "Lightweight and extensible with plugins",
  },
  {
    name: "EDAplayground",
    vendor: "EDA Playground",
    useCase: "Cloud-based simulation for digital design",
    supportedLanguages: "Verilog, VHDL, SystemVerilog",
    keyFeature: "Quick prototyping and collaborative design",
  },
];

const ASICSoftware = () => {
  const [search, setSearch] = useState("");

  const filteredSoftware = ASICSoftwares.filter((software) => {
    const term = search.toLowerCase();
    return (
      software.name.toLowerCase().includes(term) ||
      software.vendor.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <Navbar />

      <section className="section">
        <div className="container">
          <h1 className="title" style={{ paddingTop: "2%" }}>
            ASIC Software Tools
          </h1>

          <p className="content">
            Application-Specific Integrated Circuit (ASIC) software refers to specialized tools used to design,
            simulate, synthesize, and verify ASIC hardware. These tools handle tasks from converting RTL code
            to gate-level implementations, optimizing for performance and power, to validating logic functionality.
          </p>

          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Search ASIC software tools..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="columns is-multiline">
            {filteredSoftware.length > 0 ? (
              filteredSoftware.map((software, index) => (
                <div className="column is-one-third" key={index}>
                  <div className="box">
                    <h2 className="title is-4">{software.name}</h2>
                    <p><strong>Vendor:</strong> {software.vendor}</p>
                    <p><strong>Use Case:</strong> {software.useCase}</p>
                    <p><strong>Supported Languages:</strong> {software.supportedLanguages}</p>
                    <p><strong>Key Feature:</strong> {software.keyFeature}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No matching ASIC software tools found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ASICSoftware;
