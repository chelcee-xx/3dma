import React from "react";
import girlr from "../img/girlr.png";
import vector from "../img/Vector.png";
import bus from "../img/bus_men.png";
import woman from "../img/mobile/home/woman.png"
import line from "../img/mobile/home/line.svg"

function Heading() {
    return (
        <><section id="heading">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <h1>welcome to 3DMA </h1>
                        <h2 className="">We help organize your company <span className="line">efficiently</span></h2>
                        <button className="btn btn-outline-primary">Learn more about us        <i class="fa-solid fa-arrow-right"></i></button>
                        <br />
                        <img src={vector} alt="a" />
                        <p>our team is trusted partner in offering the best suitable solution for your business just get in
                            touch it is simple</p>
                    </div>
                    <div>

                        <img className="abs" src={girlr} alt="a" />
                    </div>
                </div>
            </div>
        </section>
            <section id="heading1">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={woman} className="max" />

                            <h1>welcome to <br />3DMA </h1>
                            <h2 className="">We help organize your company<br /> <span className="line">efficiently</span></h2>
                            <button className="btn btn-outline-primary">Learn more about us        <i class="fa-solid fa-arrow-right"></i></button>
                            <br />
                            <img src={line} alt="a" className="zag" />
                            <p>our team is trusted partner in offering the best suitable solution for your business just get in
                                touch it is simple</p>
                        </div>
                        <div>

                            <img className="abs" src={girlr} alt="a" />
                        </div>
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
                    <div className="image">
                        <img src={bus} alt="a" />
                    </div>
                </div>

                <div className="who1">
                   
                        <h3 className="line">who we are</h3>
                        <div className="image">
                            <img src={bus} alt="a" />
                        </div> 
                       
                        <p>we are a training and consulting company We know staying current is paramount in a rapidly changing
                            industry.
                            That's why we actively participate in technology industry associations and conferences on the state
                            and
                            national levels, making sure you stay current on the issues, trends, and laws that impact your
                            business.
                        </p>
                    
                </div>
            </section></>
    )
}

export default Heading 