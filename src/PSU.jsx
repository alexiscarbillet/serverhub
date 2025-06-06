import React from 'react';
import Navbar from './components/Navbar';

export default function PSUs() {
  return (
    <>
      <Navbar />
      <section className="section">
        <div className="container">
          <h1 className="title" style={{ marginTop: '3%' }}>
            Power Supply Units (PSUs) for Servers
          </h1>
          <p>
            The Power Supply Unit (PSU) is one of the most critical components of any server or workstation. It converts electrical power from a standard outlet into the correct voltage, current, and frequency required by the server hardware. This page will help you understand the role of PSUs in servers, types of PSUs, and important features to consider when selecting a PSU for your server setup.
          </p>

          <h2 className="subtitle" style={{ marginTop: '3%' }}>
            What is a Power Supply Unit (PSU)?
          </h2>
          <p>
            A Power Supply Unit (PSU) is an electrical device that provides power to a server or computer by converting the AC (alternating current) power from the outlet into DC (direct current) power used by the server's internal components, such as the motherboard, CPU, RAM, and storage drives.
          </p>
          <p>
            The PSU is responsible for ensuring that the server receives the proper amount of power, protecting it from power surges, and ensuring stable operation. A reliable PSU is essential for avoiding system crashes, hardware damage, and downtime.
          </p>

          <h2 className="title is-3" style={{ marginTop: '3%' }}>
            Types of Power Supply Units:
          </h2>

          <h3 className="title is-4" style={{ marginTop: '3%' }}>
            1. ATX Power Supply Units
          </h3>
          <p>ATX PSUs are the most common type of power supply used in desktop computers and small servers...</p>
          <ul>
            <li><strong>Form Factor:</strong> Standard ATX (also available in smaller forms like Micro-ATX and SFX)</li>
            <li><strong>Power Output:</strong> Varies from 300W to 1500W</li>
            <li><strong>Efficiency Rating:</strong> Typically 80 Plus Bronze, Silver, or Gold</li>
            <li><strong>Cooling:</strong> Uses fan cooling</li>
          </ul>

          <h3 className="title is-4" style={{ marginTop: '3%' }}>
            2. Redundant Power Supply (RPS)
          </h3>
          <p>Redundant PSUs (RPS) are used in enterprise-level servers where uptime is critical...</p>
          <ul>
            <li><strong>Form Factor:</strong> Common in 1U, 2U, and rack-mounted servers</li>
            <li><strong>Redundancy:</strong> Allows for hot swapping</li>
            <li><strong>Power Output:</strong> 500W to 2000W</li>
            <li><strong>Efficiency Rating:</strong> 80 Plus Gold or Platinum</li>
          </ul>

          <h3 className="title is-4" style={{ marginTop: '3%' }}>
            3. Modular Power Supply Units
          </h3>
          <p>Modular PSUs provide the flexibility of connecting only the cables needed...</p>
          <ul>
            <li><strong>Form Factor:</strong> Typically ATX</li>
            <li><strong>Modular Design:</strong> Add/remove cables as needed</li>
            <li><strong>Power Output:</strong> 400W to 1200W</li>
            <li><strong>Efficiency Rating:</strong> 80 Plus Gold or Platinum</li>
          </ul>

          <h3 className="title is-4" style={{ marginTop: '3%' }}>
            4. High-Efficiency Power Supply Units
          </h3>
          <p>High-efficiency PSUs are designed to minimize energy waste...</p>
          <ul>
            <li><strong>Efficiency Rating:</strong> 80 Plus Platinum or Titanium</li>
            <li><strong>Power Output:</strong> 500W to 1500W</li>
            <li><strong>Energy Efficiency:</strong> Reduces power waste and heat</li>
          </ul>

          <h2 className="subtitle" style={{ marginTop: '3%' }}>
            Important Features to Consider When Choosing a PSU
          </h2>

          <h3 className="title is-4" style={{ marginTop: '3%' }}>
            1. Wattage and Power Requirements
          </h3>
          <p>Ensure the PSU handles the total power draw of your system...</p>
          <ul>
            <li><strong>Calculation:</strong> Add 20–30% margin above total consumption</li>
          </ul>

          <h3 className="title is-4" style={{ marginTop: '3%' }}>
            2. Efficiency Rating (80 Plus Certification)
          </h3>
          <p>Efficiency ratings indicate how effectively the PSU converts power...</p>
          <ul>
            <li><strong>Bronze:</strong> 82–85%</li>
            <li><strong>Silver:</strong> 85–88%</li>
            <li><strong>Gold:</strong> 87–90%</li>
            <li><strong>Platinum:</strong> 89–92%</li>
            <li><strong>Titanium:</strong> 90–94%</li>
          </ul>

          <h3 className="title is-4" style={{ marginTop: '3%' }}>
            3. Form Factor
          </h3>
          <p>Form factor determines PSU's physical size...</p>
          <ul>
            <li><strong>ATX:</strong> Standard size</li>
            <li><strong>SFX:</strong> Small form factor</li>
            <li><strong>Redundant:</strong> For enterprise use</li>
          </ul>

          <h3 className="title is-4" style={{ marginTop: '3%' }}>
            4. Reliability and Warranty
          </h3>
          <p>Choose PSUs with good reputations and long warranties...</p>
          <ul>
            <li><strong>Considerations:</strong> Warranty length and brand reliability</li>
          </ul>

          <h2 className="title is-4" style={{ marginTop: '3%' }}>
            Conclusion
          </h2>
          <p>
            Choosing the right PSU ensures stable power delivery, efficiency, and system longevity. Invest in quality to avoid costly outages and maximize performance.
          </p>
        </div>
      </section>
    </>
  );
}
