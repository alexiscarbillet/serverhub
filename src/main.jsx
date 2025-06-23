import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import CPU from './CPU.jsx'
import GPU from './GPU.jsx'
import NPU from './NPU.jsx'
import TPU from './TPU.jsx'
import VPU from './VPU.jsx'
import Disks from './Disks.jsx'
import Motherboard from './Motherboard.jsx'
import PSUs from './PSU.jsx'
import RamModels from './Rams.jsx'
import AboutMe from './AboutMe.jsx'; 
import AboutRaid from './AboutRaid.jsx';
import StorageControllers from './StorageControllers.jsx'; 
import './index.css';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cpu" element={<CPU />} />
        <Route path="/gpu" element={<GPU />} />
        <Route path="/npu" element={<NPU />} />
        <Route path="/tpu" element={<TPU />} />
        <Route path="/vpu" element={<VPU />} />
        <Route path="/disks" element={<Disks />} />
        <Route path="/motherboard" element={<Motherboard />} />
        <Route path="/psu" element={<PSUs />} />
        <Route path="/ram" element={<RamModels />} />
        <Route path="/storage-controllers" element={<StorageControllers />} />
        <Route path="/about" element={<AboutRaid />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
