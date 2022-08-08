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
function Outsource() {
    return (
        <main>
            <NavList />
            <section id="why">
                <img src={bg}></img>
            </section>
            <section id="info">
                <div className="who">
                    <div>
                        <img src={smile} alt="a" />
                        
                    </div>
                    <div className="write-up">
                        <h3>outsourcing</h3>
                        <p>3DMA is an outsourcing company in Nigeria. We are passionate about recruiting, training and management of staff of reputable companies in Nigeria.
                            We realised a lot of companies/organisations have problems finding employable youth  while trying to attain excellence and ensuring the organisation achieves its set purpose</p>
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

            <section id="find-great-work">
                <div className="find text-center">
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
                    <img src={brand}></img>
                </div>


            </section>

            <Footer />
        </main>
    )
}

export default Outsource;