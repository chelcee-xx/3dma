import consult from "../img/consult_img.png"
import NavList from "./NavList";
import stand from "../img/stand_ou.svg";
import Reviews from "../components/reviews";
import Footer from "../components/Footer";
import bg from "../img/consul_bg.png"

function Consult() {
  return (
    <>
      <main>
        <NavList />
        <section id="why" alt="">

          <img src={bg}></img>

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
          </section>
          <section>
          <h3 className="text-center">what makes us stand out</h3>
          <div>
            <img src={stand}></img>
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