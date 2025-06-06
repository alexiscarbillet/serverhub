// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-primary">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <strong>ServerHub</strong>
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/cpu">CPUs</Link>
          <Link className="navbar-item" to="/gpu">GPUs</Link>
          <Link className="navbar-item" to="/npu">NPUs</Link>
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
