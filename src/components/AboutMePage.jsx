import React from "react";
import manThumbsUp from "../assets/Images/manThumbsUp.jpeg"; 

function AboutMePage() {
  return (
    <section className="about-me-page">
      <div className="aboutMeContainer">
        <div className="about-me-image">
            <img src={manThumbsUp} alt="about-me" />
        </div>
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            ultricies u. <br /> Donec nec mi nec urna ftincidunot.
            Nullam aliquam, nunc non fermentum <br /> fermentum, neque velit
            ultricies mi.
          </p>
          <p>
            Nullam auctor, lorem ac lobortis tincidunt, elit magna tempor nunc,
            a tincid<br />
            facilisi. In hac habitasse platea dictumst. Sed at erat eu mi auctor
            ultricies. .
          </p>

          <button>Contact us</button>
        </div>
      </div>
    </section>
  );
}

export default AboutMePage;
