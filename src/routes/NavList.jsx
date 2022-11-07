import { NavLink, Outlet } from "react-router-dom";
import React from "react";
import logo from "../img/logo.svg"


function closeNav() {
    document.getElementById("navbarNav").style.width = "0%";
}
function openNav() {
    document.getElementById("navbarNav").style.width = "100%";}

    function NavList() {
       

        let activeStyle = {
            textDecoration: 'underline',
            color: '#918c8c',
            textDecorationColor: '#FF9800'
        };
 

        return (


            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid nav-con">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                     aria-label="Toggle navigation" onClick={openNav}>
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>&times;</a>
                        <ul className="navbar-nav my-auto mx-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" id="focusme"
                                    to="/home"
                                    style={({ isActive }) =>
                                        isActive ? activeStyle : undefined
                                    }
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

        )
    }

    export default NavList;