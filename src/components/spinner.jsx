import React from "react";
import "../assets/css/spinner.css";

const spinner = () => {
  return (
    <div className="spinnerloader vh-100 vw-100 justify-content-center align-items-center">
      <div className="spinner-border text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default spinner;
