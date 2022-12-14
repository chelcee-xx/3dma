import Footer from "../components/Footer";
import NavList from "./NavList";
import bg from "../img/recruit_bg.png"
import up from "../img/upload.png"; import React from "react";
import bg2 from "../img/mobile/recruitment/recruit.png";
import icon from "../img/location.svg"
import handleScroll from "../scroll";
import { useEffect } from "react";

function Recruit() {

    function openForm(event) {

        var rowId =
            event.target.parentNode.parentNode.id;
        //this gives id of tr whose button was clicked
        var data = document.getElementById(rowId).querySelectorAll(".row-data");
        /*returns array of all elements with 
        "row-data" class within the row with given id*/

        var name = data[0].innerHTML;
        const result = name.split('<')[0];
        window.job = result;
        console.log("Name: " + window.job);
        document.getElementsByClassName("title")[0].innerHTML = window.job;
        document.getElementsByClassName("modal-wrapper")[0].style.display = "block";
    }

    function closeForm() {
        document.getElementsByClassName("modal-wrapper")[0].style.display = "none";
    }
    
    useEffect(() => {
        handleScroll()
      }, []);

    return (
        <main>
            <div id="blur">
                <NavList />
                <section id="why">
                    <img src={bg} className="desktop"></img>
                    <img src={bg2} className="mobile"/>
                </section>

                <section id="apply">
                    <h3 className="text-center">Hiring Just Got Easy Now</h3>

                    <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job type</th>
                            <th>Salary</th>
                            <th>Apply</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr id="1">
                            <td dataLabel="Name" class="row-data">Senior Web Developer
                                <p>lekki lagos nigeria</p></td>
                            <td dataLabel="Type" class="row-data">Hybrid</td>
                            <td dataLabel="Salary" class="row-data">N200K-500K</td>
                            <td ><button type="submit" onClick={openForm}>Apply</button></td>
                        </tr>
                        <tr id="2">
                            <td dataLabel="Name" class="row-data">Branch Manager - Tank And Pump Developer<p>lekki lagos nigeria</p></td>
                            <td dataLabel="Type" class="row-data">Remote</td>
                            <td dataLabel="Salary" class="row-data">N200K-500K</td>
                            <td  class="row-data"><button type="submit" onClick={openForm}>Apply</button></td>
                        </tr>
                        <tr id="3">
                            <td dataLabel="Name" class="row-data">software engineer<p>lekki lagos nigeria</p></td>
                            <td  dataLabel="Type"class="row-data">Onsite</td>
                            <td  dataLabel="Salary"class="row-data">N200K-500K</td>
                            <td  class="row-data"><button type="submit" onClick={openForm}>Apply</button></td>
                        </tr>
                        <tr id="4">
                            <td dataLabel="Name" class="row-data">Manual Machinist<p>lekki lagos nigeria</p></td>
                            <td  dataLabel="Type" class="row-data">Remote</td>
                            <td  dataLabel="Salary" class="row-data">N200K-500K</td>
                            <td  class="row-data"><button type="submit" onClick={openForm}>Apply</button></td>
                        </tr>
                        <tr id="5">
                            <td dataLabel="Name" class="row-data">software engineer<p>lekki lagos nigeria</p></td>
                            <td dataLabel="Type" class="row-data">Onsite</td>
                            <td dataLabel="Salary" class="row-data">N200K-500K</td>
                            <td  class="row-data"><button type="submit" onClick={openForm}>Apply</button></td>
                        </tr>
                        <tr id="6">
                            <td dataLabel="Name" class="row-data">Branch Manager - Tank And Pump<p>lekki lagos nigeria</p></td>
                            <td dataLabel="Type" class="row-data">Hybrid</td>
                            <td dataLabel="Salary" class="row-data">N200K-500K</td>
                            <td  class="row-data"><button type="submit" onClick={openForm}>Apply</button></td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </div>



            <div className="modal-wrapper">
                <form action className="form color center myForm">
                    <h6 className="title text-center"></h6>
                    <div className="inputContainer">
                        <input type="text" className="input" />
                        <label htmlFor className="label">Full Name</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" />
                        <label htmlFor className="label">Email</label>
                    </div>
                    <div className="inputContainer">
                        <input type="text" className="input" />
                        <label htmlFor className="label">Phone number</label>
                    </div>
                    <div className="inputContainer">
                        <label for="files" class="btn but">Upload your cv <img src={up} className="no-width"/></label>
                        <input id="files" type="file" />
                        <label htmlFor className="label">Upload Cv</label>

                    </div>
                    <button className="btn btn-dark" type="button">submit</button>
                    <button className="btn btn-dark" type="button" onClick={closeForm}>close</button>
                </form>
            </div>
            <Footer />
        </main>
    )
}

export default Recruit;