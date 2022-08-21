import NavList from "./NavList";
import smile from "../img/smile.png"
import man from "../img/staff.png"
import Footer from "../components/Footer";
import c1 from "../img/opportune.png";
import c3 from "../img/explore.png";
import c2 from "../img/control.png";
import brand from "../img/brands.png"
import bg from "../img/out_bg.png"
import React from "react";
import bg2 from "../img/mobile/outsource/outsource_bg.png"
import b1 from "../img/brands/162-1627992_graphic-design-hd-png-download-removebg-preview.svg"
import b2 from "../img/brands/Andela-logo-landscape-blue-400px 1.svg"
import b3 from "../img/brands/Cregital-Logo 1.svg"
import b4 from "../img/brands/download (1) 1.svg"
import b5 from "../img/brands/flutterwave-logo-vector-removebg-preview 1.svg"
import b6 from "../img/brands/image 2.svg"
import b7 from "../img/brands/Remitter_Logo-removebg-preview.svg"
import Slider from "react-slick";
import { settings } from "../components/slider";
import handleScroll from "../scroll";
import { useEffect } from "react";



const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
};

function Outsource() {
    useEffect(() => {
        handleScroll()
      }, []);
    return (
        <main>
            <NavList />
            <section id="why">
                <img src={bg} className="desktop"></img>
                <img src={bg2} className="mobile"></img>
            </section>
            <section id="info">
                <div className="who">
                    <div>
                        <img src={smile} alt="a" className="desktop smile" />

                    </div>
                    <div className="write-up">
                        <h3>outsourcing</h3>
                        <p>3DMA is an outsourcing company in Nigeria. We are passionate about recruiting, training and management of staff of reputable companies in Nigeria.
                            We realised a lot of companies/organisations have problems finding employable youth  while trying to attain excellence and ensuring the organisation achieves its set purpose</p>
                    </div>

                </div>
                <div className="who1">
                    <h3>outsourcing</h3>
                    <div>
                        <img src={smile} alt="a" />

                    </div>
                    <div className="write-up">

                        <p>3DMA is an outsourcing company in Nigeria. We are passionate about recruiting, training and management of staff of reputable companies in Nigeria.
                            <br /><br /> We realised a lot of companies/organisations have problems finding employable youth  while trying to attain excellence and ensuring the organisation achieves its set purpose</p>
                    </div>

                </div>
            </section>

            <section id="info">
                <div className="who skills">

                    <div className="write-up">
                        <h2>Hire a pro for any skill</h2>
                        <ul>
                            <li>Development & IT
                            </li>
                            <li>Design & Creative
                            </li>
                            <li>Sales & Marketing
                            </li>
                            <li>Writing & Translation
                            </li>
                            <li>Admin & Customer Support
                            </li>
                            <li>Finance & Accounting
                            </li>
                            <li>See all specializations
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src={man} alt="a" />
                        <div className="btns">
                            <button type="button" class="btn btn-outline-success">UI/UX designer</button>
                            <button type="button" class="btn btn-outline-success">Mobile App Development</button>
                            <button type="button" class="btn btn-outline-success">Systems Administration</button>
                            <button type="button" class="btn btn-outline-success">Full Stack Development</button>
                        </div></div>
                </div>


            </section>
            <div className="who1 skills">
                <h3>Hire a pro for any <br />skill</h3>
                <img src={man} alt="a" />
                <div className="shift">

                    <ul>
                        <li>Development & IT
                        </li>
                        <li>Design & Creative
                        </li>
                        <li>Sales & Marketing
                        </li>
                        <li>Writing & Translation
                        </li>
                        <li>Admin & Customer Support
                        </li>
                        <li>Finance & Accounting
                        </li>
                        <li>See all specializations
                        </li>
                    </ul>
                </div>
                <div>



                    <div className="btns1">
                        <Slider {...settings1}>
                            <div>  <button type="button" class="btn btn-outline-success">UI/UX designer</button></div>
                            <div><button type="button" class="btn btn-outline-success">Mobile App Development</button></div>
                            <div><button type="button" class="btn btn-outline-success">Systems Administration</button></div>
                            <div><button type="button" class="btn btn-outline-success">Full Stack Development</button></div>
                        </Slider>
                    </div>
                </div>

            </div>

            <section id="find-great-work">
                <div className="find my-4 text-center">
                    <h3 >find great work</h3>
                    <p>Meet clients you're excited to work with and take<br />
                        your career or business to new heights.</p>
                </div>

                <div className="work">
                    <img src={c1}></img>
                    <img src={c2}></img>
                    <img src={c3}></img>
                </div>
            </section>
            <section id="brands">
                <div className="text-center">
                    <h3>Trusted by leading brands and startups</h3>
                    <div className="brands">
                        <div className="desktop">
                            <img src={b1} className="flow"></img>
                            <img src={b2} className="flow"></img>
                            <img src={b3} className="flow"></img>
                            <img src={b4} className="flow"></img>
                            <img src={b5} className="flow"></img>
                            <img src={b6} className="flow"></img>
                            <img src={b7} className="flow"></img>
                        </div>
                        <Slider {...settings1} className="mobile">
                            <img src={b1} className="flow"></img>
                            <img src={b2} className="flow"></img>
                            <img src={b3} className="flow"></img>
                            <img src={b4} className="flow"></img>
                            <img src={b5} className="flow"></img>
                            <img src={b6} className="flow"></img>
                            <img src={b7} className="flow"></img>
                        </Slider>
                    </div>
                </div>


            </section>

            <Footer />
        </main>
    )
}

export default Outsource;