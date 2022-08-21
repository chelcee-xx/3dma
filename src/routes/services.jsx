import Footer from "../components/Footer"
import NavList from "./NavList"
import girl from "../img/services/girl.png"
import tech from "../img/services/tech.png"
import meet from "../img/services/meet.png"
import coat from "../img/services/coat.png"
import old from "../img/services/old.png"
import sticky from "../img/services/sticky.png"
import lady from "../img/services/lady.png"
import stock from "../img/services/stock.png"
import lock from "../img/services/lock.png"
import app from "../img/services/app.png"
import light from "../img/services/light.png"
import chart from "../img/services/chart.png"
import think from "../img/services/think.png"
import serv from "../img/serv_bg.png"; 
import React from "react";
import service from "../img/mobile/services/services.png"
import handleScroll from "../scroll";
import { useEffect } from "react";




function Services() {
    useEffect(() => {
        handleScroll()
      }, []);
    return (
        <main>
            <NavList />
            <section id="why">
                <img src={serv} className="desktop"></img>
                <img src={service} className="mobile"></img>
            </section>
            <section id="info non">
                <div className="services">

                    <div className="who">

                        <div className="write-up">
                            <h3>Information Security</h3>
                            <p>Information Security is basically the practice of preventing unauthorized access, use, disclosure, disruption, modification, inspection, recording or destruction of information. Information can be physical or electronic one </p>
                        <ul>
                            <li>ITIL 4 foundation</li>
                            <li>ISO 20000 Lead Implementer</li>
                            <li>ISO 20000 Lead Auditor</li>
                        </ul>
                        </div> <div>
                            <img src={girl} alt="a" />
                        </div>
                    </div>

                    <div className="who">
                        <div>
                            <img src={tech} alt="a" />
                        </div>
                        <div className="write-up">
                            <h3>Service Management </h3>
                            <p>Service Management is a customer-focused approach to delivering information technology. Service Management focuses on providing value to the customer and also on the customer relationship </p>
                        <ul>
                            <li>ISO 27001 Lead Auditor</li>
                            <li>ISO 27001 Lead Implementer</li>
                            <li>Certified Information Security Manager (CISM)</li>
                            <li>Cyber Security Awareness Training for Staff</li>
                        </ul>

                        </div>
                    </div>
                    <div className="who">
                        <div className="write-up">
                            <h3>Business Continuity</h3>
                            <p>Project management is the process of leading the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, </p>
                        
                            <ul>
                            <li>ISO 22301 Lead Implementer</li>
                            <li>ISO 22301 Lead Auditor</li>
                            
                        </ul></div> <div>
                            <img src={meet} alt="a" />
                        </div>
                    </div>
                    <div className="who">
                        <div>
                            <img src={coat} alt="a" />
                        </div>
                        <div className="write-up">
                            <h3>IT Governance</h3>
                            <p>The Federal and State Government have been one of our most reliable clientele and we have produced cards that cut across several of its paratatals. </p>
                            <ul>
                            <li>COBIT 2019 Foundation</li>
                            <li>COBIT 2019 Design and Implementation</li>
                            <li>Certified in The Governance of Enterprise IT(CGEIT)</li>
                            <li>Certified Information Systems Auditor (CISA)</li>
                        </ul></div>
                    </div>
                    <div className="who">

                        <div className="write-up">
                            <h3>Project Management</h3>
                            <p>Project management is the process of leading the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, created at the beginning of the development process.</p>
                       <ul>
                        <li>Project Management Professional PMP Training</li>
                       </ul> </div> <div>
                            <img src={old} alt="a" />
                        </div>
                    </div>
                    <div className="who">
                        <div>
                            <img src={sticky} alt="a" />
                        </div>
                        <div className="write-up">
                            <h3>Competency Development & Service Management Workshop</h3>
                            <p>IT Quality Management Workshop
                                Our two-day customed IT Quality Management course provides hands-on guidance on the design, implementation and continuous improvement of an IT Quality Management System driven by the IT Quality principles, and practices
                                IT Service Reporting  Workshop
                                Our two-day IT Service Reporting Workshop entails end to end hands-on IT Service Reporting from how to get started to more advanced techniques to address ever-increasing business needs, complexity and customer demand.
                                IT Change Management workshop
                                Our two-day IT Change Management Workshop brings latest hands-on best practices for managing IT Changes,including ways to effectively and efficiently manage a Change Management function.
                                Problem Management & RootCause Analysis Method Workshop
                                Our two-day Problem Management and Root Cause Analysis Techniques Workshop provides a hands-on approach to applying well-established root cause analysis principles and techniques. This will allow you to identify the sources of recurring incidents and problems and reduce service downtime. It focusses on how to decipher the root causes of incidents and problems using a various proven techniques.
                            </p>
                        </div>
                    </div>
                    <div className="who">
                        <div>
                            <img src={lady} alt="a" />
                        </div>
                        <div className="write-up">
                            <h3>Management System Implementation</h3>
                            <p> A management system is the framework that enables companies to achieve their operational and business objectives through a process of continuous improvement. </p>
                            <ul>
                            <li>ISO 22301</li>
                            <li>ISO 20000</li>
                            <li>ISO 27001 (Plus Cyber Assurance & Compliance)</li>
                           
                        </ul></div>
                    </div>
                    <div className="who">

                        <div className="write-up">
                            <h3>Compliance Reviews, Maturity Assessments and Audits</h3>
                            <p>Industry Risk's security compliance reviews and audit services involve assessing existing arrangements for alignment or conformance with designated benchmarks (legislation, standards, codes, policies etc.) We perform these security compliance processes in relation to both security management functions and cybersecurity requirements.</p>
                       <ul>
                        <li>COBIT 2019 Implementation</li>
                       </ul>
                        </div> <div>
                            <img src={stock} alt="a" />
                        </div>
                    </div>
                    <div className="who">
                        <div>
                            <img src={lock} alt="a" />
                        </div>
                        <div className="write-up">
                            <h3>Computer Security & Incidence Response Planning</h3>
                            <p>A cybersecurity incident response plan (or IR plan) is a set of instructions designed to help companies prepare for, detect, respond to, and recover from network security incidents.</p>
                        </div>
                    </div>
                    <div className="who">

                        <div className="write-up">
                            <h3>Business Continuity Planning & Implementation</h3>
                            <p>Business Continuity Should Be Business As Usual. Enable The Right Response With Veoci! Bridge The Gap Between Plans & Actions. Discover Our BMCP Software. Talk To Us Today! </p>
                        </div> <div>
                            <img src={app} alt="a" />
                        </div>
                    </div>
                    <div className="who">

                        <div className="write-up">
                            <h3>Audits & Assurance</h3>
                            <p>Assurance in auditing refers to the opinions issued by a professional regarding the accuracy and completeness of what's analyzed. For example, an accountant assuring that financial statements are accurate and valid asserts that they have reviewed the documents using acceptable accounting standards and principles.</p>
                            <ul>
                        <li>COBIT 2019 Implementation</li>
                       </ul></div> <div>
                            <img src={think} alt="a" />
                        </div>
                    </div>
                    <div className="who">
                        <div>
                            <img src={chart} alt="a" />
                        </div>
                        <div className="write-up">
                            <h3>Strategy Consulting</h3>
                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital.on the state and national levels, making sure you stay current on the issues, trends, and laws that impact your business.
                                Strategy consultants advise organisations on high-level decisions in an unbiased fashion, using deep industry knowledge to deliver the best results. It is a type of Management Consulting, which generally implies advising at the highest-level of a company..</p>
                                <ul>
                        <li>Cyber Security Strategy</li>
                        <li>Digital Strategy</li>
                       </ul></div>
                    </div>
                    <div className="who">

                        <div className="write-up">
                            <h3>Virtual Chief Information officer Advisory</h3>
                            <p>The vCIO collaborates with and advises clients' IT departments and performs the same functions as a conventional CIO. Those duties include formulating strategic IT goals, planning the IT budget, analyzing and reworking business processes and facilitating technology changes.</p>
                            <ul>
                        <li>Virtual CIO Consultancy</li>
                       </ul> </div> <div>
                            <img src={light} alt="a" />
                        </div>
                    </div>
                    <div className="who">
                        <div>
                            <img src={light} alt="a" />
                        </div>
                        <div className="write-up">
                            <h3>Virtual Chief Information Security officer Advisory</h3>
                            <p>Driving results today means being active online. In our tech-centric world, however, cyber criminals are increasingly taking over the stage in the form of both external threat actors and trusted internal employees.</p>
                        </div>
                    </div>
                    <div className="who">

                        <div className="write-up">
                            <h3>Recruit IT Professionals</h3>
                            <p>Tech talent wants to know how much they will earn if they were to switch jobs. They are fully aware of the demand for their unique skills and want to be paid for it accordingly. However, money is not the only thing that justifies their decision for changing jobs and certainly not the reason as to why they would stay at their current employer.</p>
                        </div>
                        <div>
                            <img src={meet} alt="a" />
                        </div>
                    </div>
                    <div className="who">
                        <div>
                            <img src={light} alt="a" />
                        </div>
                        <div className="write-up">
                            <h3>IT Governance Outsoucing</h3>
                            <p>The Federal and State Government have been one of our most reliable clientele and we have produced cards thta cut across several of its paratatals. </p>
                        </div>
                    </div></div>









                <div className="services">

                    <div className="who1">

                       
                            <h3>Information Security</h3>

                        <div>
                            <img src={girl} alt="a" />
                        </div>
                        <p>Information Security is basically the practice of preventing unauthorized access, use, disclosure, disruption, modification, inspection, recording or destruction of information. Information can be physical or electronic one </p>
                        <ul>
                            <li>ITIL 4 foundation</li>
                            <li>ISO 20000 Lead Implementer</li>
                            <li>ISO 20000 Lead Auditor</li>
                        </ul></div>

                    <div className="who1">
                    <h3>Service Management </h3>
                        <div>
                            <img src={tech} alt="a" />
                        </div>
                      
                           
                            <p>Service Management is a customer-focused approach to delivering information technology. Service Management focuses on providing value to the customer and also on the customer relationship </p>
                            <ul>
                            <li>ISO 27001 Lead Auditor</li>
                            <li>ISO 27001 Lead Implementer</li>
                            <li>Certified Information Security Manager (CISM)</li>
                            <li>Cyber Security Awareness Training for Staff</li>
                        </ul>
                    </div>
                    <div className="who1">
                      
                            <h3>Business Continuity</h3>
                            <div>
                            <img src={meet} alt="a" />
                        </div>
                            <p>Project management is the process of leading the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, </p>
                            <ul>
                            <li>ISO 22301 Lead Implementer</li>
                            <li>ISO 22301 Lead Auditor</li>
                            
                        </ul>
                    </div>
                    <div className="who1">
                    <h3>IT Governance</h3>
                        <div>
                            <img src={coat} alt="a" />
                        </div>
                        
                           
                            <p>The Federal and State Government have been one of our most reliable clientele and we have produced cards that cut across several of its paratatals. </p>
                            <ul>
                            <li>COBIT 2019 Foundation</li>
                            <li>COBIT 2019 Design and Implementation</li>
                            <li>Certified in The Governance of Enterprise IT(CGEIT)</li>
                            <li>Certified Information Systems Auditor (CISA)</li>
                        </ul>
                    </div>
                    <div className="who1">

                      
                            <h3>Project Management</h3>
                            <div>
                            <img src={old} alt="a" />
                        </div>
                            <p>Project management is the process of leading the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, created at the beginning of the development process.</p>
                            <ul>
                        <li>Project Management Professional PMP Training</li>
                       </ul>
                    </div>
                    <div className="who1">
                        
                       
                            <h3>Competency Development & Service Management Workshop</h3>
                            <div>
                            <img src={sticky} alt="a" />
                        </div>
                            <p>IT Quality Management Workshop
                                Our two-day customed IT Quality Management course provides hands-on guidance on the design, implementation and continuous improvement of an IT Quality Management System driven by the IT Quality principles, and practices
                                IT Service Reporting  Workshop
                                Our two-day IT Service Reporting Workshop entails end to end hands-on IT Service Reporting from how to get started to more advanced techniques to address ever-increasing business needs, complexity and customer demand.
                                IT Change Management workshop
                                Our two-day IT Change Management Workshop brings latest hands-on best practices for managing IT Changes,including ways to effectively and efficiently manage a Change Management function.
                                Problem Management & RootCause Analysis Method Workshop
                                Our two-day Problem Management and Root Cause Analysis Techniques Workshop provides a hands-on approach to applying well-established root cause analysis principles and techniques. This will allow you to identify the sources of recurring incidents and problems and reduce service downtime. It focusses on how to decipher the root causes of incidents and problems using a various proven techniques.
                            </p>
                      
                    </div>
                    <div className="who1">
                        
                     
                            <h3>Management System Implementation</h3>
                            <div>
                            <img src={lady} alt="a" />
                        </div>
                            <p> A management system is the framework that enables companies to achieve their operational and business objectives through a process of continuous improvement. </p>
                            <ul>
                            <li>ISO 22301</li>
                            <li>ISO 20000</li>
                            <li>ISO 27001 (Plus Cyber Assurance & Compliance)</li>
                           
                        </ul>
                    </div>
                    <div className="who1">

                      
                            <h3>Compliance Reviews, Maturity Assessments and Audits</h3>
                            <div>
                            <img src={stock} alt="a" />
                        </div>
                            <p>Industry Risk's security compliance reviews and audit services involve assessing existing arrangements for alignment or conformance with designated benchmarks (legislation, standards, codes, policies etc.) We perform these security compliance processes in relation to both security management functions and cybersecurity requirements.</p>
                            <ul>
                        <li>COBIT 2019 Implementation</li>
                       </ul>
                    </div>
                    <div className="who1">
                       
                   
                            <h3>Computer Security & Incidence Response Planning</h3>
                            <div>
                            <img src={lock} alt="a" />
                        </div>
                            <p>A cybersecurity incident response plan (or IR plan) is a set of instructions designed to help companies prepare for, detect, respond to, and recover from network security incidents.</p>
                     
                    </div>
                    <div className="who1">

                        
                            <h3>Business Continuity Planning & Implementation</h3>
                            <div>
                            <img src={app} alt="a" />
                        </div>
                            <p>Business Continuity Should Be Business As Usual. Enable The Right Response With Veoci! Bridge The Gap Between Plans & Actions. Discover Our BMCP Software. Talk To Us Today! </p>
                        
                    </div>
                    <div className="who1">

                       
                            <h3>Audits & Assurance</h3>
                            <div>
                            <img src={think} alt="a" />
                        </div>
                            <p>Assurance in auditing refers to the opinions issued by a professional regarding the accuracy and completeness of what's analyzed. For example, an accountant assuring that financial statements are accurate and valid asserts that they have reviewed the documents using acceptable accounting standards and principles.</p>
                            <ul>
                        <li>COBIT 2019 Implementation</li>
                       </ul>
                    </div>
                    <div className="who1">
                        
                       
                            <h3>Strategy Consulting</h3>
                            <div>
                            <img src={chart} alt="a" />
                        </div>
                            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. More than 25 years of experience working in the industry has enabled us to build our services and solutions in strategy, consulting, digital.on the state and national levels, making sure you stay current on the issues, trends, and laws that impact your business.
                                Strategy consultants advise organisations on high-level decisions in an unbiased fashion, using deep industry knowledge to deliver the best results. It is a type of Management Consulting, which generally implies advising at the highest-level of a company..</p>
                                <ul>
                        <li>Cyber Security Strategy</li>
                        <li>Digital Strategy</li>
                       </ul>
                    </div>
                    <div className="who1">

                       
                            <h3>Virtual Chief Information officer Advisory</h3>
                            <div>
                            <img src={light} alt="a" />
                        </div>
                            <p>The vCIO collaborates with and advises clients' IT departments and performs the same functions as a conventional CIO. Those duties include formulating strategic IT goals, planning the IT budget, analyzing and reworking business processes and facilitating technology changes.</p>
                            <ul>
                        <li>Virtual CIO Consultancy</li>
                       </ul>
                    </div>
                    <div className="who1">
                        
                        
                            <h3>Virtual Chief Information Security officer Advisory</h3>
                            <div>
                            <img src={light} alt="a" />
                        </div>
                            <p>Driving results today means being active online. In our tech-centric world, however, cyber criminals are increasingly taking over the stage in the form of both external threat actors and trusted internal employees.</p>
                      
                    </div>
                    <div className="who1">

                       
                            <h3>Recruit IT Professionals</h3>
                            <div>
                            <img src={meet} alt="a" />
                        </div>
                            <p>Tech talent wants to know how much they will earn if they were to switch jobs. They are fully aware of the demand for their unique skills and want to be paid for it accordingly. However, money is not the only thing that justifies their decision for changing jobs and certainly not the reason as to why they would stay at their current employer.</p>
                        
                       
                    </div>
                    <div className="who1">
                       
                       
                            <h3>IT Governance Outsoucing</h3>
                            <div>
                            <img src={light} alt="a" />
                        </div>
                            <p>The Federal and State Government have been one of our most reliable clientele and we have produced cards thta cut across several of its paratatals. </p>
                       
                    </div></div>
            </section>
            <Footer></Footer>
        </main>
    )
}

export default Services