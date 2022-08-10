import React from "react";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import linked from "../img/linkedin.png"
import face from "../img/fbook.png"
import twit from "../img/twitter.png"
import tube from "../img/youtube.png"

function Footer(){
    return(
        <footer id="footer">
        <div className="row">
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
              <li>Links</li>
              <Link to="/about"><li>About</li></Link>
              <Link to="/training"><li>Training</li></Link>
              <Link to="/consult"><li>Consulting &amp; Advisory</li></Link>
              <Link to="/recruitment"><li>Recruitment</li></Link>
              <Link to="/outsourcing"><li>Outsourcing</li></Link>
            </ul>
          </div>
          <div className="col-lg-3  my-5">
            <ul>
              <li>Support</li>
              <Link to="/blog"><li>IT Blog</li></Link>
              <Link to="/contact"><li>Contact Us</li></Link>
              <Link to="/policy"><li>Privacy Policy</li></Link>
            </ul>
          </div>
          <div className="contact col-lg-3  my-5">
            Follow Us
            <div className="icons">
              
            <a href="" className=""> <img src={linked} className="blue"/></a>
            <a href="" className><img src={face} className="blue"/></a>
            <a href="" className><img src={twit} className="blue"/></a>
            <a href="" ><img src={tube} className="youtube"/></a>
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