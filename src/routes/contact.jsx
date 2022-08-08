import NavList from "./NavList"
import contact from "../img/contact_img.png"
import Form from "../components/form"
import Footer from "../components/Footer";import React from "react";

function Contact(){
    return(
        <main>
            <NavList />
            <section id="con-info">
                <div className="who">
                <div>
                <Form />
                <section>
                    <div className="details">
                        <h6>contact details</h6>
                        <p><i class="fa-solid fa-location-dot"></i>  Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
                        <p><i class="fa-solid fa-envelope"></i> Email: info@3dma.com</p>
                        <p><i class="fa-solid fa-phone"></i> call:  09094869604 0r 090348503345</p>
                    </div>
                </section>
                        </div>
                    <div>
                        <img src={contact} alt="a" />
                    </div>
                    

                </div>
            </section>
            <Footer />
        </main>
    )
}

export default Contact