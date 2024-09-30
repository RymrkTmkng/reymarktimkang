import React from "react";
import youtube from "../assets/logo/ytlogo.png";
import channel from "../assets/logo/Macklogo.png";
import "../assets/css/learn.css";

const learn = () => {
  return (
    <div className="learn row text-center align-items-center justify-content-center h-100 bg-white py-5">
      <div className="col-md-4 header-title row mb-2 ytdesc">
        <div className="col-12 mb-2">
          <img
            src={youtube}
            className="card-img-top yt-logo mb-2"
            alt="YouTube Logo"
          />
        </div>
        <div className="col-12 mb-2">Want to learn?</div>
        <div className="col-12 mb-2">
          <small className="header-desc">Checkout my YouTube Channel!</small>
        </div>
      </div>
      <div className="col-md-4 ytchannel ">
        <div className="card h-100 yt-box justify-content center align-items-center">
          <img
            src={channel}
            className="card-img-top shifu-logo"
            alt="Mack Logo"
          />
          <div className="card-body">
            <h5 className="card-title">Shifu Mack Timkang</h5>
            <p className="card-text">
              Don't forget to comment, like and subscribe!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default learn;
