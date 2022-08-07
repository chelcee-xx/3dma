import React from "react"
import one from "../img/one.png";
import two from "../img/two.png";
import three from "../img/three.png";


function News() {
  return (
    <section id="news">
      <div className="n">
      <h3>recent news</h3>
      </div>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src={one} alt="comp" style={{width: '100%'}} />
            <div className="container">
            <h6>Improving lives with technology - HSE lighthouse project</h6>
            <p>The 'Lighthouse Projects' are in the clinical disciplines of the chronic diseases Epilepsy, Haemophilia and Bipolar Diso...</p>
            <a href="#"><p>read more...</p></a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={two} alt="Mike" style={{width: '100%'}} />
            <div className="container">
            <h6>Tips to make your workforce a security front line</h6>
            <p>Cyber security is something that is constantly on our mind here at Unit. This is because, according to Bloomberg, cyber ...	</p>
            <a href="#"><p>read more...</p></a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={three} alt="John" style={{width: '100%'}} />
            <div className="container">
            <h6>Scan & index manager delivers productivity at beaumont hospital</h6>
            <p>Beaumont Hospital is a large academic teaching hospital 5km north of Dublin City centre. They provide emergency and acut...</p>
            <a href="#"><p>read more...</p></a>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default News