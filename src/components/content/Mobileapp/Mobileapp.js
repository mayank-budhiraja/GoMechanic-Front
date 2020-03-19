import React from "react";
import "./Mobileapp.css";

function Mobileapp() {
  return (
    <div className="container-fluid">
      <hr className="line"></hr>
        <div className="row-service">
            <h3 id="our-services">How GoMechanic Works?</h3>
            <div className="col-xs-12 col-md-4 image-column">
                <img className="img-responsive image-style" src="https://gomechanic.in/assets/img/homescreen.jpg" alt="" />
            </div>
        </div>
    </div>
  );
}

export default Mobileapp;
