import React from "react";
import fortami from "../assets/logo/FortamiLogo.png";
import kraftieees from "../assets/logo/kraftieeeslogo.png";
import apartment from "../assets/logo/rmtapartment.png";
import mango from "../assets/logo/rmtmango.png";
import "../assets/css/project.css";

const projects = () => {
  return (
    <div className="projects row text-center justify-content-center align-items-center m-5">
      <div className="col-sm-12 header-title mb-5">Projects</div>
      <div className="col-sm-2 col-6 proj-box">
        <a href="">
          <div className="card proj-card text-bg-dark ">
            <img
              src={fortami}
              className="card-img-top proj-logo"
              alt="Capstone project"
            />
            <div className="card-img-overlay proj-overlay text-start">
              <h5 className="card-title">Fortami</h5>
              <p className="card-text">Capstone Project</p>
              <p className="card-text">
                <small>
                  Status:
                  <span className="badge rounded-pill text-bg-success">
                    Completed
                  </span>
                </small>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-2 col-6 proj-box">
        <a href="">
          <div className="card proj-card text-bg-dark border-0 ">
            <img
              src={kraftieees}
              className="card-img-top proj-logo"
              alt="Kraftiees project"
            />
            <div className="card-img-overlay proj-overlay text-start">
              <h5 className="card-title">Kraftieees</h5>
              <p className="card-text">E-commerce website</p>
              <p className="card-text">
                <small>
                  Status:
                  <span className="badge rounded-pill text-bg-info">
                    In Progress
                  </span>
                </small>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-2 col-6  proj-box ">
        <a href="">
          <div className="card proj-card text-light border-0">
            <img
              src={apartment}
              className="card-img-top  proj-logo"
              alt="RMT Apartment project"
            />
            <div className="card-img-overlay proj-overlay text-start">
              <h5 className="card-title">RMT Apartment</h5>
              <p className="card-text">Business Portal</p>
              <p className="card-text">
                <small>
                  Status:
                  <span className="badge rounded-pill text-bg-info">
                    In Progress
                  </span>
                </small>
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="col-sm-2 col-6 proj-box">
        <a href="">
          <div className="card proj-card text-bg-dark border-0 ">
            <img
              src={mango}
              className="card-img-top proj-logo"
              alt="RMT Mango project"
            />
            <div className="card-img-overlay proj-overlay text-start">
              <h5 className="card-title">RMT Mango</h5>
              <p className="card-text">E-commerce website</p>
              <p className="card-text">
                <small>
                  Status:
                  <span className="badge rounded-pill text-bg-info">
                    In Progress
                  </span>
                </small>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default projects;
