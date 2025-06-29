// src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong>ServerHub</strong>
        </Link>

        {/* Hamburger menu for mobile */}
        <a
          role="button"
          className={`navbar-burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => setIsActive(!isActive)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">

          {/* Dropdown for processors */}
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">Processors</a>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/cpu">CPUs</Link>
              <Link className="navbar-item" to="/gpu">GPUs</Link>
              <Link className="navbar-item" to="/npu">NPUs</Link>
              <Link className="navbar-item" to="/tpu">TPUs</Link>
              <Link className="navbar-item" to="/vpu">VPUs</Link>
            </div>
          </div>

          {/* Other individual items */}
          <Link className="navbar-item" to="/disks">Disks</Link>
          <Link className="navbar-item" to="/motherboard">Motherboards</Link>
          <Link className="navbar-item" to="/psu">PSUs</Link>
          <Link className="navbar-item" to="/ram">RAMs</Link>
          <Link className="navbar-item" to="/storage-controllers">Storage Controllers</Link>
          <Link className="navbar-item" to="/about">About RAID</Link>
          <Link className="navbar-item" to="/about-me">About Me</Link>
        </div>
      </div>
    </nav>
  );
}
