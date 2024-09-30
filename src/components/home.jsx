import React from "react";
import myphoto from "../assets/logo/posefront.jpg";
import "../assets/css/home.css";

const home = () => {
  return (
    <div
      className="content row px-5 vh-100 justify-content-center align-items-center"
      id="home"
    >
      <div className="col-sm-6 my-img text-center">
        <img
          src={myphoto}
          className="rounded-5 my-photo-cartoon"
          alt="my photo"
        />
      </div>
      <div className="col-sm-6 namewdesc">
        <div className="row">
          <div className="col-12 header-title name mt-3">REYMARK</div>
          <div className="col-12 header-title name mb-5">
            <small>TIMKANG</small>
          </div>
          <div className="col-12 header-desc px-10 mb-5">
            Full stack web developer delivering custom web solutions for
            businesses.
          </div>
          <div className="col-12 mb-3 text-center">
            <a href="#about" className="btn btn-light explorebtn">
              About Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
