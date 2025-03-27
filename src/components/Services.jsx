import React from 'react'
import { TfiAnnouncement } from "react-icons/tfi";

function Services() {
  return (
    <section className="services-page">
      <div className="services-container">
        <div className="top-content-service">
          <h2 className="service-title">
            My <span>Service</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adip <br />
            isicing elit. Quibusdam, minus. Omnis sit quidem, <br /> magnam
            culpa tempore optio unde dolor cupiditate
          </p>
        </div>

        <div className="grid-div">
          <div className="grid-container">
            <div className="grid">
              <div className="icon">
                <TfiAnnouncement />
              </div>
              <h3>Web Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicin <br /> elit.
                Quibusdam, minus. 
              </p>
            </div>
          </div>

          <div className="grid-container">
            <div className="grid">
              <div className="icon">
                <TfiAnnouncement />
              </div>
              <h3>App Development</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicin <br /> elit.
                Quibusdam, minus. 
              </p>
            </div>
          </div>

          <div className="grid-container">
            <div className="grid">
              <div className="icon">
                <TfiAnnouncement />
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicin <br /> elit.
                Quibusdam, minus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services