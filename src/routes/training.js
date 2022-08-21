import React from "react";
import NavList from "./NavList";
import train from "../img/training_head.png"
import trainimg from "../img/train_img.png";
import Footer from "../components/Footer";
import icon from "../img/icon.svg"
import train_bg from "../img/mobile/training/train_bg.png"
import Slider from "react-slick";
import { settings } from "../components/slider";

function Training() {
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.2,
    slidesToScroll: 1
  };
  return (

   
    <><NavList />

      <section id="why">
        <img src={train} className="desktop"></img>
        <img src={train_bg} className="mobile"></img><br />
      </section>
      <section id="info non">
        <div className="who ">
          <div>
            <img src={trainimg} alt="a" className="" />

          </div>
          <div className="write-up">
            <h3>take the right approach to learning</h3>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital.on the state and national levels, making sure you stay current on the issues, trends, and laws that impact your business.
            </p>
          </div>

        </div>

        <div className="who1">
          <h3>take the right approach <br /> to learning</h3>
          <div>
            <img src={trainimg} alt="a" className="" />

          </div>
          <div className="write-up">
            <br />
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital.on the state and national levels, making sure you stay current on the issues, trends, and laws that impact your business.
            </p>
          </div>

        </div>
      </section>

      <section id="get">
        <div className="desktop">
          <div class="container1">
            <h3 className="text-center">Get Trained on</h3>
            <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
              <div class="col">
                <div class="p-3 border bg-white">
                  <img src={icon} /><div><h4>Information Security</h4></div></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white "><img src={icon} /><div><h4>IT
                  Governance </h4></div></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Project
                  Management</h4></div></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Service
                  Management </h4></div></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Business
                  Continuity</h4></div></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Recruit IT
                  Professionals</h4></div></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Audits &
                  Assurance</h4></div></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Strategy
                  Consulting</h4></div></div>
              </div>
            </div>
          </div>

          <div class="container2">
            <div class="row g-2">
              <div class="col-6">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Computer Security & Incidence
                  Response Planning</h4></div></div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Competency Development & Service
                  Management Workshop</h4></div></div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Virtual Chief Information  officer
                  Advisory</h4></div></div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Management System
                  Implementation</h4></div></div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Business Continuity
                  Planning & Implementation</h4></div></div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Virtual Chief Information Security officer
                  Advisory</h4></div></div>
              </div>
              <div class="col-6">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Compliance Reviews, Maturity
                  Assessments & Audits</h4></div></div>
              </div>

            </div>
          </div>
        </div>

        <div className="mobile shrink">

          <h3 className="text-center">Get Trained on</h3>
          <Slider {...settings2} >
            
              <div class="col">
                <div class="p-3 border bg-white">
                  <img src={icon} />
                  <h4 className="d">Information Security</h4></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white "><img src={icon} />
                  <h4 className="d">IT
                    Governance </h4></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Project
                  Management</h4></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Service
                  Management </h4></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Business
                  Continuity</h4></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Recruit IT
                  Professionals</h4></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Audits &
                  Assurance</h4></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Strategy
                  Consulting</h4></div></div>
              




              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><div><h4>Computer Security & Incidence
                  Response Planning</h4></div></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Competency Development & Service
                  Management Workshop</h4></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Virtual Chief Information  officer
                  Advisory</h4></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Management System
                  Implementation</h4></div>
              </div>
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Business Continuity
                  Planning & Implementation</h4></div></div>
             
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Virtual Chief Information Security officer
                  Advisory</h4></div></div>
              
              <div class="col">
                <div class="p-3 border bg-white"><img src={icon} /><h4>Compliance Reviews, Maturity
                  Assessments & Audits</h4></div></div>
              
          


          </Slider>
        </div>



      </section>

      <Footer /></>
  )
}

export default Training;