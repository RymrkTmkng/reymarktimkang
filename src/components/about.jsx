import React from "react";
import togahat from "../assets/logo/togahat.png";
import formalpic from "../assets/logo/formalpic.png";
import itpec from "../assets/logo/itpec.jpg";
import sleek from "../assets/logo/simple-shapes.png";
import bolt from "../assets/logo/fast-bolt.png";
import custom from "../assets/logo/custom-logo.png";
import modern from "../assets/logo/circuit.png";
import "../assets/css/about.css";

const about = () => {
  return (
    <div className="row" id="about">
      <div className="col-12 row text-center cert-box bg-white py-3 my-4">
        <div className="col-sm-4 bachelor">
          <img
            src={togahat}
            alt="Toga hat image"
            className="toga-hat-logo about-logo"
          />
          <h2 className="bachelor-desc">
            Bachelor of Science in <br />
            Information Technology
          </h2>
        </div>
        <div className="col-sm-4 bachelor">
          <img
            src={formalpic}
            alt="formal picture"
            height="110"
            className="my-formal-pic"
          />
        </div>
        <div className="col-sm-4 itpec">
          <img
            src={itpec}
            alt="ITPEC image"
            className="itpec-logo about-logo"
          />
          <h2 className="bachelor-desc">
            IT Passport Certification <br />
            ITPEC
          </h2>
        </div>
      </div>
      <div className="col-12 row skills-cont justify-content-center align-items-center mt-5">
        <div className="col-sm-2 col-6 skill-box ">
          <img src={sleek} alt="simple shapes" className="skill-logo " />
          <h2 className="skill-desc">Simple & Sleek</h2>
        </div>
        <div className="col-sm-2 col-6 skill-box">
          <img src={bolt} alt="bolt logo" className="skill-logo " />
          <h2 className="skill-desc">Fast Production</h2>
        </div>
        <div className="col-sm-2 col-6 skill-box">
          <img src={custom} alt="custom logo" className="skill-logo " />
          <h2 className="skill-desc">Custom Solutions</h2>
        </div>
        <div className="col-sm-2 col-6 skill-box">
          <img src={modern} alt="circuit logo" className="skill-logo" />
          <h2 className="skill-desc">Modern Tech</h2>
        </div>
        <div className="col-sm-8 about-desc mt-3">
          <p className="p-4">
            I’m a Full Stack Web Developer committed to delivering high-quality
            results. I focus on creating designs that are both simple and
            elegant, ensuring projects are completed efficiently and on time. I
            specialize in developing tailored solutions that meet specific needs
            and utilize the latest technologies to stay ahead in the field. My
            goal is to consistently provide professional, effective web
            solutions and exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
