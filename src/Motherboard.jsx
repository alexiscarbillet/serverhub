import React, { useState } from 'react';
import Navbar from './components/Navbar';

const motherboards = [
  {
    title: 'ASUS ROG Strix Z590-E',
    formFactor: 'ATX',
    socket: 'LGA1200',
    chipset: 'Z590',
    price: 300,
  },
  {
    title: 'MSI B550M PRO-VDH WiFi',
    formFactor: 'microATX',
    socket: 'AM4',
    chipset: 'B550',
    price: 100,
  },
  {
    title: 'Gigabyte Z690I AORUS Ultra',
    formFactor: 'miniITX',
    socket: 'LGA1700',
    chipset: 'Z690',
    price: 500,
  },
  {
    title: 'MSI MEG X570 ACE',
    formFactor: 'ATX',
    socket: 'AM4',
    chipset: 'X570',
    price: 350,
  },
  {
    title: 'Gigabyte Z590 AORUS Elite',
    formFactor: 'ATX',
    socket: 'LGA1200',
    chipset: 'Z590',
    price: 220,
  },
  {
    title: 'ASRock B550M Steel Legend',
    formFactor: 'microATX',
    socket: 'AM4',
    chipset: 'B550',
    price: 140,
  },
];

const Motherboard = () => {
  const [formFactor, setFormFactor] = useState('all');
  const [socket, setSocket] = useState('all');
  const [chipset, setChipset] = useState('all');
  const [price, setPrice] = useState('all');

  const filtered = motherboards.filter(mb => {
    return (
      (formFactor === 'all' || mb.formFactor === formFactor) &&
      (socket === 'all' || mb.socket === socket) &&
      (chipset === 'all' || mb.chipset === chipset) &&
      (price === 'all' || mb.price <= parseInt(price))
    );
  });

  return (
    <>
      <Navbar />

      {/* Intro Section */}
      <section className="section">
        <div className="container">
          <h1 className="title" style={{ paddingTop: '3%' }}>Motherboards</h1>
          <p>The motherboard is the central circuit board in your computer that connects all the hardware components together. It determines compatibility with processors, memory, and other peripherals. Here, you can find a variety of motherboards tailored to different needs, whether for gaming, professional use, or general computing.</p>
          <h2 className="subtitle" style={{ paddingTop: '3%' }}>Key Features of a Motherboard</h2>
          <p><strong>Form Factor:</strong> The physical size and layout of the motherboard. Common types include ATX, microATX, and mini-ITX.</p>
          <p><strong>Socket Type:</strong> The type of connector used for the processor. Different CPUs require different socket types.</p>
          <p><strong>Chipset:</strong> The chipset determines the motherboard's compatibility with certain processors and features like RAM and expansion slots.</p>
          <p><strong>Expansion Slots:</strong> These slots allow you to add additional components like graphics cards, network cards, and more.</p>
        </div>
      </section>

      {/* Filters */}
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {[
              {
                label: 'Form Factor',
                value: formFactor,
                onChange: setFormFactor,
                options: ['ATX', 'microATX', 'miniITX']
              },
              {
                label: 'Socket Type',
                value: socket,
                onChange: setSocket,
                options: ['LGA1200', 'LGA1700', 'AM4']
              },
              {
                label: 'Chipset',
                value: chipset,
                onChange: setChipset,
                options: ['Z590', 'B550', 'X570', 'Z690']
              },
              {
                label: 'Price',
                value: price,
                onChange: setPrice,
                options: [
                  { label: 'Up to $100', value: 100 },
                  { label: 'Up to $300', value: 300 },
                  { label: 'Up to $500', value: 500 },
                  { label: 'Up to $1,000', value: 1000 }
                ]
              }
            ].map((filter, index) => (
              <div key={index} className="column is-one-quarter">
                <div className="field">
                  <label className="label">Filter by {filter.label}</label>
                  <div className="control select">
                    <select
                      value={filter.value}
                      onChange={e => filter.onChange(e.target.value)}
                    >
                      <option value="all">All</option>
                      {filter.options.map(opt =>
                        typeof opt === 'string'
                          ? <option key={opt} value={opt}>{opt}</option>
                          : <option key={opt.value} value={opt.value}>{opt.label}</option>
                      )}
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="section">
        <div className="container">
          {filtered.length === 0 ? (
            <p>No motherboards match your filters.</p>
          ) : (
            <div className="columns is-multiline">
              {filtered.map((mb, i) => (
                <div key={i} className="column is-half">
                  <div className="card">
                    <div className="card-content">
                      <p className="title">{mb.title}</p>
                      <p className="subtitle">{mb.formFactor}, {mb.socket}</p>
                      <div className="content">
                        <p><strong>Form Factor:</strong> {mb.formFactor}</p>
                        <p><strong>Socket Type:</strong> {mb.socket}</p>
                        <p><strong>Chipset:</strong> {mb.chipset}</p>
                        <p><strong>Price:</strong> ${mb.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Motherboard;
