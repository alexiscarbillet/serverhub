// src/AboutMe.jsx
import React from 'react';
import Navbar from './components/Navbar';

export default function AboutMe() {
  return (
    <>
      <Navbar />

      <section className="section" style={{ marginTop: '4rem' }}>
        <div className="container">
          <div className="columns">
            {/* Picture */}
            <div className="column is-one-third">
              <figure className="image">
                <img src="/assets/images/alexis_carbillet.png" alt="Alexis Carbillet" />
              </figure>
            </div>

            {/* Text and Icons */}
            <div className="column">
              <h1 className="title">About Me</h1>
              <p>
                Hello, I'm Alexis Carbillet! I am a passionate web developer with a love for coding,
                design, and creating useful tools. I enjoy learning new technologies and working on
                exciting projects.
              </p>

              <div className="buttons" style={{ marginTop: '3%' }}>
                <a
                  href="https://ac-electricity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-medium is-info"
                >
                  <span className="icon"><i className="fa fa-bolt"></i></span>
                </a>
                <a
                  href="https://all-about-cats.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-medium is-primary"
                >
                  <span className="icon"><i className="fa fa-cat"></i></span>
                </a>
                <a
                  href="https://ac-programming.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-medium is-danger"
                >
                  <span className="icon"><i className="fa fa-code"></i></span>
                </a>
                <a
                  href="https://alexis-carbillet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button is-medium is-secondary"
                >
                  <span className="icon"><i className="fa fa-home"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
