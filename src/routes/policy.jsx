import NavList from "./NavList";
import Footer from "../components/Footer";
import privacy from "../img/Privacy_bg.png";
import policy from "../img/mobile/policy/policy.png"
import React from "react";

function Policy() {
    return (
        <main>
            <NavList />
            <img src={privacy} className="desktop"/>
            <img src={policy} className="mobile"/>
            <br/>
            <section id="policy">
            <div className="p-3">
            <p>Please note that this Privacy Policy contains capitalized words or phrases. These words and phrases are defined terms. Their definitions are found either in this Privacy Policy or in our Terms and Conditions of Use ("Terms of Use"). To help you use this Privacy Policy and our Terms of Use, we have made some words, phrases and headings into hyperlinks. These words, phrases and headings have color highlighting.</p>

            <p>If you have a privacy or data use concern that we have not addressed satisfactorily in this Privacy Policy, please contact us at privacy@wwe.com. If you have an unresolved privacy or data use concern that we have not addressed satisfactorily, please contact our U.S.-based third party dispute resolution provider (free of charge) at https://feedback-form.truste.com/watchdog/request.</p>
            </div>
            </section>
            <Footer />
        </main>
    )
}

export default Policy;