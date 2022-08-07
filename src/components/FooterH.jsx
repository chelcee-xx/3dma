import React from "react";
import news from "../img/footer_bg.png";
import logo from "../img/logo.svg";

function FooterH() {
  return (
    <footer id="footer">
      <div className="newsletter">
        <img className="text-center" src={news} alt="a" />

        <div className="form-info">
          <h3>get our weekly update by subscribing to our newsletter</h3>
          <input type="text" /><input type="submit" defaultValue="Subscribe" />
        </div></div>
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
            <a href><i className="fa fa-phone" /></a>
            <a href><i className="fa-brands fa-facebook-f" /></a>
            <a href><i className="fa-brands fa-twitter" /></a>
            <a href><i className="fa-brands fa-instagram" /></a>
          </div>
        </div>
        <p className="text-center">Copyright (C)
          3DMA. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default FooterH;