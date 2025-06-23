// src/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />

      <section id="main" className="section" style={{ marginTop: '4rem' }}>
        <div className="container">
          <h1 className="title">Welcome to ServerHub!</h1>
          <p>Explore the latest and most powerful hardware components for servers.</p>

          {/* First Line of Cards */}
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">CPU Models</p>
                  <p>Compare CPU architectures and performance.</p>
                  <Link to="/cpu" className="button is-primary">Explore CPUs</Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">GPU Models</p>
                  <p>Find the best GPUs for your server setup.</p>
                  <Link to="/gpu" className="button is-primary">Explore GPUs</Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">NPU Models</p>
                  <p>Find the best NPUs for your server setup.</p>
                  <Link to="/npu" className="button is-primary">Explore NPUs</Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">TPU Models</p>
                  <p>Find the best TPUs for your server setup.</p>
                  <Link to="/tpu" className="button is-primary">Explore TPUs</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Second Line of Cards */}
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">VPU Models</p>
                  <p>Find the best VPUs for your server setup.</p>
                  <Link to="/vpu" className="button is-primary">Explore VPUs</Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">Disk Storage</p>
                  <p>Explore HDD, SSD, and RAID configurations.</p>
                  <Link to="/disks" className="button is-primary">Explore Disks</Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">Motherboard</p>
                  <p>Explore server motherboards, compatibility, and expansion options.</p>
                  <Link to="/motherboard" className="button is-primary">Explore Motherboards</Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">PSUs</p>
                  <p>Find the right power supply units to meet the demands of your server setup.</p>
                  <Link to="/psu" className="button is-primary">Explore PSUs</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">RAM Models</p>
                  <p>Explore different RAM types, sizes, and speeds for your server.</p>
                  <Link to="/ram" className="button is-primary">Explore RAMs</Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">Storage Controllers</p>
                  <p>Discover the best storage controllers for managing your server’s data.</p>
                  <Link to="/storage-controllers" className="button is-primary">Explore Storage Controllers</Link>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="card-content">
                  <p className="title">About RAID</p>
                  <p>Learn about RAID configurations, their strengths, and which is best for your server setup.</p>
                  <Link to="/about" className="button is-primary">Learn About RAID</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
