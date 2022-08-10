import "./App.css";

import ada from "./img/ada.png"
import john from "./img/john.png"
import paul from "./img/paul.png"
import c1 from "./img/card1.png"
import c2 from "./img/card2.png"
import c3 from "./img/card3.png"
import NavList from "./routes/NavList";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Why from "./components/why";
import News from "./components/news";
import Reviews from "./components/reviews";import React from "react";
import Newsletter from "./components/newsletter";





function App() {
  return (
    <div className="app">
      <NavList></NavList>
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

