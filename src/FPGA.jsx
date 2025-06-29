import React, { useState } from "react";
import Navbar from './components/Navbar';

const FPGAs = [
  {
    name: "Xilinx Zynq-7000",
    vendor: "AMD Xilinx",
    useCase: "Embedded systems, ARM + FPGA SoC",
    logicElements: "85K–444K logic cells",
    keyFeature: "Integrated ARM Cortex-A9 processors",
  },
  {
    name: "Intel Cyclone V",
    vendor: "Intel (Altera)",
    useCase: "Low power, industrial and automotive applications",
    logicElements: "25K–301K logic elements",
    keyFeature: "Low power consumption with integrated HPS",
  },
  {
    name: "Lattice iCE40",
    vendor: "Lattice Semiconductor",
    useCase: "Mobile, IoT, and ultra-low power devices",
    logicElements: "384–7,680 logic cells",
    keyFeature: "Open-source toolchain support (e.g., IceStorm)",
  },
  {
    name: "QuickLogic EOS S3",
    vendor: "QuickLogic",
    useCase: "Always-on voice, sensor hubs, wearable devices",
    logicElements: "2K–8K logic cells",
    keyFeature: "Integrated voice and sensor processing",
  },
  {
    name: "Microsemi SmartFusion2",
    vendor: "Microchip (Microsemi)",
    useCase: "Secure, low-power, mixed-signal FPGAs",
    logicElements: "5K–150K logic elements",
    keyFeature: "Integrated Cortex-M3 and flash-based FPGA fabric",
  },
];

const FPGAHardware = () => {
  const [search, setSearch] = useState("");

  const filteredFPGAs = FPGAs.filter((fpga) => {
    const term = search.toLowerCase();
    return (
      fpga.name.toLowerCase().includes(term) ||
      fpga.vendor.toLowerCase().includes(term)
    );
  });

  return (
    <div>
      <Navbar />

      <section className="section">
        <div className="container">
          <h1 className="title" style={{ paddingTop: "2%" }}>
            FPGA Hardware Platforms
          </h1>

          <p className="content">
            Field-Programmable Gate Arrays (FPGAs) are integrated circuits that can be reconfigured by the user 
            after manufacturing. They are widely used in applications requiring custom digital logic, such as 
            signal processing, embedded systems, and prototyping of ASICs. FPGA hardware varies in size, performance, 
            and power efficiency, catering to a range of use cases from mobile devices to high-performance computing.
          </p>

          <div className="field">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Search FPGA hardware..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="columns is-multiline">
            {filteredFPGAs.length > 0 ? (
              filteredFPGAs.map((fpga, index) => (
                <div className="column is-one-third" key={index}>
                  <div className="box">
                    <h2 className="title is-4">{fpga.name}</h2>
                    <p><strong>Vendor:</strong> {fpga.vendor}</p>
                    <p><strong>Use Case:</strong> {fpga.useCase}</p>
                    <p><strong>Logic Elements:</strong> {fpga.logicElements}</p>
                    <p><strong>Key Feature:</strong> {fpga.keyFeature}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No matching FPGA hardware found.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FPGAHardware;
