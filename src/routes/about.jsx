import NavList from "./NavList";
import w from "../img/why_bg.jpg";
import glass from "../img/glasses.png";
import bus from "../img/bus_men.png";
import Footer from "../components/Footer";
import Why from "../components/why";
import React from "react";
import w2 from "../img/mobile/about/about_b.png"

function About() {
  return (
    <>
      <main>
        <NavList></NavList>
        <section id="why">
          <img src={w} alt="bg" className="desktop"></img>
          <img src={w2} width="100%" alt="bg" className="mobile"></img>
          <h2>about us</h2>
        </section>
        <section id="info">
          <div className="who">
            <div>
              <img src={glass} alt="a" />
            </div>
            <div className="write-up">
              <h3>About us</h3>
              <p>3DMA Consulting Limited is limited liability company incorporated in response to the growing need to better position organizations to derive more benefits in the use of information System resources and Enhance Cyber Security.
              </p>
            </div>

          </div>

          <div className="who1">
          <h3>About us</h3>
            <div>
              <img src={glass} width="250%" alt="a" />
            </div>
            <div className="write-up">
              
              <p>3DMA Consulting Limited is limited liability company incorporated in response to the growing need to better position organizations to derive more benefits in the use of information System resources and Enhance Cyber Security.</p>
            </div>

          </div>
        </section>

        <section id="mission">
          <div className="mis-vis">
            <div className="under">
              <h5>Our mission</h5>
              <p>Building on our technologies and competencies creating value for our customers. We’ll achieve this by focusing on the intersection of our client’s emerging needs and the acceleration of business and technological change.</p>

            </div>
            <div className="under">
              <h5>our values</h5>
              <p>Our values are the guiding principles upon which 3DMA
                was founded and how we strive to conduct our business on a daily basis. Values establish our view of the world as we shape the future. They determine how we treat each other.</p>
            </div>

            <div className="under">
              <h5>Our vission</h5>
              <p>Our drive for exceptional service delivery is built on the belief that we are nothing if you are not satisfied with us. Our passion for helping you achieve your goals, no matter what, is what truly differentiates us from our competitors.</p>
            </div>

          </div>
          </section>

          <section id="info">
            <div className="who">
              <div className="write-up">
                <h3 className="line">who we are</h3>
                <p>we are a training and consulting company We know staying current is paramount in a rapidly changing
                  industry.
                  That's why we actively participate in technology industry associations and conferences on the state
                  and
                  national levels, making sure you stay current on the issues, trends, and laws that impact your
                  business.
                </p>
              </div>
              <div>
                <img src={bus} alt="a" />
              </div>
            </div>

            <div className="who1">
            <h3 className="line">who we are</h3>
            <div>
                <img src={bus} alt="a" width="100%" />
              </div>
              <div className="write-up">
                
                <p>we are a training and consulting company We know staying current is paramount in a rapidly changing
                  industry.
                  That's why we actively participate in technology industry associations and conferences on the state
                  and
                  national levels, making sure you stay current on the issues, trends, and laws that impact your
                  business.
                </p>
              </div>
             
            </div>
          </section>
          <Why />
       

        <Footer />
      </main>
    </>
  );
}

export default About;