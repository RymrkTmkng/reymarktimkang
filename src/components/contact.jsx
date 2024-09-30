import React from "react";
import help from "../assets/logo/helpbg.png";
import timsdev from "../assets/logo/timsdevlogo.png";
import "../assets/css/contact.css";

const contact = () => {
  return (
    <div className="contact px-5 my-5 d-flex justify-content-center">
      <div className="card card-cont" style={{ width: "800px" }}>
        <div className="row g-0">
          <div className="cardimg col-md-4">
            <img
              src={help}
              className="img-fluid rounded-start"
              alt="Helping hands image"
            />
            <div className="imgwithtext text-center">
              <p className="card-text">
                <small>Need help?</small>
              </p>
              <h5 className="card-title">Contact me</h5>
            </div>
          </div>
          <div className="col-md-8 gmail">
            <div className="card-body text-center py-2">
              <img
                src={timsdev}
                className="mb-2 rounded-5"
                alt="Timsdev logo"
                width="150"
              />
              <div className="card-title text-dark">
                reymarktimkang@timsdev.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
