import React from 'react';
import Navbar from './components/Navbar';


export default function AboutRaid() {
  return (
    <>
      <Navbar />
      
      <section className="section" style={{ marginTop: '4.5rem' }}>
        <div className="container">
          <h1 className="title">RAID (Redundant Array of Independent Disks)</h1>
          <p>
            <strong>RAID</strong> is a technology that combines multiple hard drives or SSDs into a single unit to improve performance, redundancy, or both. It offers different configurations, each with varying levels of data protection and speed.
          </p>

          <h2 className="subtitle" style={{ marginTop: '3%' }}>Types of RAID</h2>
          <ul>
            <li><strong>RAID 0 (Striping)</strong>: Increases performance but no redundancy.</li>
            <li><strong>RAID 1 (Mirroring)</strong>: High redundancy but lower storage efficiency.</li>
            <li><strong>RAID 5 (Striping with Parity)</strong>: Good balance of performance and redundancy. Needs at least 3 disks.</li>
            <li><strong>RAID 10 (1+0)</strong>: Combines mirroring and striping. High performance and redundancy.</li>
            <li><strong>RAID 6 (Double Parity)</strong>: Allows two disk failures. Requires at least 4 disks.</li>
          </ul>

          <h2 className="subtitle" style={{ marginTop: '3%' }}>Strengths and Weaknesses</h2>
          <ul>
            <li><strong>RAID 0</strong>: Fast but risky – no fault tolerance.</li>
            <li><strong>RAID 1</strong>: Redundant but storage-costly.</li>
            <li><strong>RAID 5</strong>: Efficient but slower rebuilds.</li>
            <li><strong>RAID 10</strong>: Best of both worlds, but storage-heavy.</li>
            <li><strong>RAID 6</strong>: Highly fault-tolerant, but slower writes.</li>
          </ul>

          <h2 className="subtitle" style={{ marginTop: '3%' }}>Which RAID Levels are Most Used in Enterprises?</h2>
          <p>
            Enterprises mostly use RAID 5 and RAID 10. RAID 5 balances performance and redundancy, while RAID 10 is ideal for high-performance setups that need reliability.
          </p>
        </div>
      </section>
    </>
  );
}
