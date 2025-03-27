import React from "react";
import grid1 from "../assets/images/grid1.jpeg";
import grid2 from "../assets/images/grid2.jpeg";
import grid3 from "../assets/images/grid3.jpeg";
import grid4 from "../assets/images/grid4.jpeg";
import largegrid from "../assets/images/largegrid.jpeg";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">
        <h1 className="portfolio__title">
          My <span>Portfolio</span>
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Quod
          minima quidem tempora eligendi <br />, beatae dolor{" "}
        </p>

        <div className="portfolio__grid">
          <div className="portfolio__large">
            <img src={largegrid} alt="Large Project" />
          </div>

          <div className="portfolio__small">
            <div className="smallgrid">
              <img src={grid2} alt="Project 2" />
              <img src={grid3} alt="Project 3" />
            </div>
            <div className="smallgrid">
              <img src={grid4} alt="Project 4" />
              <img src={grid1} alt="Project 5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
