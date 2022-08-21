import consult from "../img/consult_img.png"
import NavList from "./NavList";
import stand from "../img/stand_ou.svg";
import Reviews from "../components/reviews";
import Footer from "../components/Footer";
import bg from "../img/consul_bg.png";
import stand_m from "../img/mobile/consult/stand.svg"
import React from "react";
import bg2 from "../img/mobile/consult/consult_bg.png"
import handleScroll from "../scroll";
import { useEffect } from "react";


function Consult() {
  useEffect(() => {
    handleScroll()
  }, []);
  return (
    <>
      <main>
        <NavList />
        <section id="why" alt="">

          <img src={bg} className="desktop"></img>
          <img src={bg2} className="mobile"></img>

          <section id="info">
            <div className="who">
              <div>
                <img src={consult}></img>
              </div>
              <div className="write-up">
                <h3>get the right advise from us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus odio blandit orci eleifend erat eget sed vel. Aliquam ullamcorper sit malesuada sodales est ante sagittis quis. Mauris sit ipsum adipiscing aliquam id nunc nisl. Laoreet et purus dictumst phasellus massa elementum diam. Amet, commodo lacus sem amet. Vitae sit quis pharetra porttitor sagittis, sodales dolor donec. In posuere turpis praesent semper viverra consequat, congue neque. Egestas nunc vulputate nulla faucibus. Eget diam arcu, molestie ornare felis risus tempor, malesuada vitae.</p>
              </div>
            </div>

            <div className="who1">
            <h3>get the right advise<br/> from us</h3>
              <div>
                <img src={consult}></img>
              </div>
              <div className="write-up">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus odio blandit orci eleifend erat eget sed vel. Aliquam ullamcorper sit malesuada sodales est ante sagittis quis. Mauris sit ipsum adipiscing aliquam id nunc nisl. Laoreet et purus dictumst phasellus massa elementum diam. Amet, commodo lacus sem amet. Vitae sit quis pharetra porttitor sagittis, sodales dolor donec. In posuere turpis praesent semper viverra consequat, congue neque. Egestas nunc vulputate nulla faucibus. Eget diam arcu, molestie ornare felis risus tempor, malesuada vitae.</p>
              </div>
            </div>
          </section>
          <section>
            <h3 className="text-center">what makes us stand out</h3>
            <div>
              <img src={stand} className="desktop"></img>
              <img src={stand_m} className="mobile"></img>
            </div>
          </section>
          <Reviews />
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Consult;