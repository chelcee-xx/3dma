import React from "react";
import logo from "../img/logo.svg";

function Footer(){
    return(
        <footer id="footer">
        <div className="row ">
          <div className="col-lg-3">
            <img className="logo" src={logo} alt="a" />
            <h5 className="Address">Address: 675 Alpha Drive,<br />Ste E, Highland Heights,  OH 44143
              Phone: (216) 966 1022
              email:info@3dma.com <br />
              Fax: (216) 966 1023
            </h5>
          </div>
          <div className="col-lg-3 my-5">
            <ul>
              <li>links</li>
              <li>About</li>
              <li>Training</li>
              <li>Consulting &amp; Advisory</li>
              <li>Recruitment</li>
              <li>Outsourcing</li>
            </ul>
          </div>
          <div className="col-lg-3  my-5">
            <ul>
              <li>Support</li>
              <li>IT Blog</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="contact col-lg-3  my-5">
            <h5>Follow us</h5>
            <div className="icons">
              
              <a href><i class="fa-brands fa-linkedin"></i></a>
              <a href><i class="fa-brands fa-facebook"></i></a>
              <a href><i className="fa-brands fa-twitter" /></a>
              <a href><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>
          <p className="text-center">Copyright (C)
            3DMA. All rights reserved
          </p>
        </div>
      </footer>
    )
}

export default Footer;