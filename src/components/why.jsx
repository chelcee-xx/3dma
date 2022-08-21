import React from "react";
import choose from "../img/choose.png"
import choose1 from "../img/mobile/home/why_bg.svg"


function Why() {
    return (
        <><section id="why">
            <div className="">
            <img src={choose} className ="desktop"/>
            <div className="mobile reasons text-center">
            <h3 className="above py-4">Why you should choose us</h3>
            <img src={choose1} className=""/>
        </div>
            </div>
        </section>
        </>


    )
}

export default Why