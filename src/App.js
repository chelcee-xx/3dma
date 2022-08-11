import "./App.css";

import ada from "./img/ada.png"
import john from "./img/john.png"
import paul from "./img/paul.png"
import c1 from "./img/card1.png"
import c2 from "./img/card2.png"
import c3 from "./img/card3.png"
// import NavList from "./routes/NavList";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Why from "./components/why";
import News from "./components/news";
import Reviews from "./components/reviews";import React from "react";
import Newsletter from "./components/newsletter";

import { NavLink, Outlet } from "react-router-dom";

import logo from "./logo.svg"



function App() {

  let activeStyle = {
    textDecoration: 'underline',
    color: '#918c8c',
    textDecorationColor: '#FF9800'
    

};

  return (
        <div className="app">
     
     <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid nav-con">
            <a className="navbar-brand" href="#">
                <img src={logo} className="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav my-auto mx-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link active"
                            to="/home"
                            style={activeStyle}
                            
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/About"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            About us</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/training"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Training</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/consult"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Consulting &amp; Advisory</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/services"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/recruitment"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Recruitment</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/outsourcing"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Outsourcing</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/contact"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
        <Outlet />
    </nav>

      <Heading />
      <section id="services">
        <h3>explore our services with just a click</h3>
        <img src={c1}></img><img src={c2}></img><img src={c3}></img>
      </section>
      <Why/>
      <section id="team-members">
      <h3>Meet our team members</h3>
        <div className="team">
          <div className="pic">
          <img src={ada}></img>
          </div>
          <div className="pic">
          <img src={john}></img>
          </div>
          <div className="pic">
          <img src={paul}></img>
          </div>
        </div>
      </section>
      
      <Reviews />
      <News />
      <Newsletter />
      <Footer />


      

    </div>
  );
}




export default App;

