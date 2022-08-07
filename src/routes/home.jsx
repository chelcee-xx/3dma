import { NavLink, Outlet } from "react-router-dom";
import React from "react";

function Home() {
  let activeStyle = {
    textDecoration: 'underline',
    color: 'red'
};

return (
    

    <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid nav-con">
            <a className="navbar-brand" href="#">
                <img src="./img/logo.svg" className="logo" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav my-auto mx-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link"
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
                            to="/About"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/About"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Training</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/About"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Consulting &amp; Advisory</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/About"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Recruitment</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/About"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >Outsourcing</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"
                            to="/About"
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

  export default Home;