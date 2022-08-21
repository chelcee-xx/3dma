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
import Reviews from "./components/reviews"; import React from "react";
import Newsletter from "./components/newsletter";
import meet from "./img/meeting.png"
import { NavLink, Outlet } from "react-router-dom";
import logo from "./logo.svg"

import { useEffect } from "react";

import Slider from "react-slick";
import { settings } from "./components/slider";


function closeNav() {
    document.getElementById("navbarNav").style.width = "0%";
}
function openNav() {
    document.getElementById("navbarNav").style.width = "100%";}

function App() {
    {useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);}

    let activeStyle = {
        textDecoration: 'underline',
        color: '#918c8c',
        textDecorationColor: '#FF9800'};

   

    return (
        <div className="app">

            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid nav-con">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"  onClick={openNav}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
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
                <h3>explore our services with <br/> just a click</h3>
                <img src={c1}></img><img src={c2}></img><img src={c3}></img>
            </section>
            <Why />
            <section id="serving">
                <div className="who">
                    <img src={meet} alt="a" />
                    <div className="mx-5">
                        <h6>BIG NAME CUSTOMERS</h6>
                        <h3 className="">Serving 50% Of
                            <br />Global 2000 Companies</h3>



                        <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital.
                        </p>
                    </div></div>
                <div className="who1 my-5">
                    <div className="mx-2">
                        <h6>BIG NAME CUSTOMERS</h6>
                        <h3 className="">Serving 50% Of
                            <br />Global 2000 Companies</h3></div>
                    <div className="image py-3">
                        <img src={meet} alt="a" />
                    </div>

                    <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital.
                    </p>

                </div>
            </section>
            <section id="team-members">
                <h3>Meet our team members</h3>
                <div className="team desktop">
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

                <div className="team mobile">
                    <Slider {...settings} className="my-4">
                        <div className="pic">
                            <img src={ada}></img>
                        </div>
                        <div className="pic">
                            <img src={john}></img>
                        </div>
                        <div className="pic">
                            <img src={paul}></img>
                        </div>
                    </Slider>
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

