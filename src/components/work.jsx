import React from "react";
import alliance from "../assets/logo/alliance.jpg";
import proweaver from "../assets/logo/proweaver.jpg";
import timsdev from "../assets/logo/Timsdev-nodotcom.png";
import html from "../assets/logo/html.png";
import css from "../assets/logo/css.png";
import js from "../assets/logo/javascript.png";
import react from "../assets/logo/reactjs.png";
import ajax from "../assets/logo/Ajax.png";
import jquery from "../assets/logo/jquery.png";
import laravel from "../assets/logo/laravel.png";
import mysql from "../assets/logo/mysql.png";
import bootstrap from "../assets/logo/bootstrap.png";
import php from "../assets/logo/php.png";
import codeigniter from "../assets/logo/Codeigniter.png";
import wordpress from "../assets/logo/Wordpress.png";
import "../assets/css/work.css";

const work = () => {
  return (
    <div
      className="work-experience row justify-content-center align-items-center"
      id="work"
    >
      <div className="col-12 workexp-section ">
        <div className="text-center header-title h-100 my-5 ">
          Work Experience
        </div>
      </div>
      <div className="col-sm-4 workbox">
        <div className="card h-100 work-cont">
          <img
            src={alliance}
            className="card-img-top work-logo"
            alt="Alliance Logo"
          />
          <div className="card-body ">
            <h5 className="card-title">Intern Web Programmer</h5>
            <p className="card-text mb-2">2022-2023</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4 workbox">
        <div className="card h-100 work-cont">
          <img
            src={proweaver}
            className="card-img-top work-logo"
            alt="Proweaver Logo"
          />
          <div className="card-body">
            <h5 className="card-title">Web Programmer</h5>
            <p className="card-text mb-2  ">2023 - 2024</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4 workbox">
        <div className="card h-100 work-cont">
          <img
            src={timsdev}
            className="card-img-top work-logo"
            alt="Timsdev Logo"
          />
          <div className="card-body">
            <h5 className="card-title">Freelance Web Developer</h5>
            <p className="card-text mb-2">Present</p>
          </div>
        </div>
      </div>
      <div className="col-12 technobox row text-center ">
        <div className="col-12 text-center header-title mt-5 mb-3">
          Technologies
        </div>
        <div className="col-12 text-center techs">
          <ul className="row technologo list-unstyled">
            <li className="col-6 col-md-3">
              <img src={html} className="tech-logos" alt="HTML logo" />
            </li>
            <li className="col-6 col-md-3">
              <img src={css} className="tech-logos" alt="CSS logo" />
            </li>
            <li className="col-6 col-md-3">
              <img src={js} className="tech-logos" alt="JS logo" />
            </li>
            <li className="col-6 col-md-3">
              <img
                src={bootstrap}
                className="tech-logos"
                alt="Bootstrap logo"
              />
            </li>
            <li className="col-6 col-md-3">
              <img src={ajax} className="tech-logos" alt="AJAX logo" />
            </li>
            <li className="col-6 col-md-3">
              <img src={jquery} className="tech-logos" alt="jQuery logo" />
            </li>
            <li className="col-6 col-md-3">
              <img src={php} className="tech-logos" alt="PHP logo" />
            </li>
            <li className="col-6 col-md-3">
              <img src={mysql} className="tech-logos" alt="MySQL logo" />
            </li>
            <li className="col-6 col-md-3">
              <img
                src={codeigniter}
                className="tech-logos"
                alt="CodeIgniter logo"
              />
            </li>
            <li className="col-6 col-md-3">
              <img src={react} className="tech-logos" alt="React JS logo" />
            </li>
            <li className="col-6 col-md-3">
              <img src={laravel} className="tech-logos" alt="Laravel logo" />
            </li>
            <li className="col-6 col-md-3">
              <img
                src={wordpress}
                className="tech-logos"
                alt="WordPress logo"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default work;
