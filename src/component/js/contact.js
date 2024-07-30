import React from "react";
import '../css/contact.css'; // Import your CSS file

const Contact = () => {
    return (
        <div className="contact" id="contact">
               <h1>Contact</h1>
               <div className="social">
                    <div className="social-box">
                        <div className="box-logo-contact"><img className="logo-icons" src="/facebook-logo.png" alt="facebook"/></div>
                        <div className="box-logo-contact"><img className="logo-icons" src="/github.png" alt="github"/></div>
                        <div className="box-logo-contact"><img className="logo-icons" src="/line.png" alt="line"/></div>
                        <div className="box-logo-contact"><img className="logo-icons" src="/linkedin.png" alt="linkin"/></div>
                    </div>
               </div>
               <div className="contact-alert-contact">
                     <div className="contact-box contactbox1">
                        <div className="box-logo-contact">
                            <img className="logo-icons" src="/map.png"/>
                        </div>
                        <div className="description-contact">
                                <ul>
                                    <li><p>40/1 ,Bor ,Meang Nan District, Nan 55000</p></li>
                                    <li><p>Pattrajit dormitory ,Mueang Phitsanulok District, Phitsanulok 65000</p></li>
                                </ul>
                        </div>
                     </div>
                     <div className="contact-box contactbox2">
                        <div className="box-logo-contact">
                            <img className="logo-icons" src="telephone-call.png"/>
                        </div>
                        <div className="description-contact">
                                <ul>
                                    <li><p>063-1152630</p></li>
                                    <li><p>092-3416674</p></li>
                                </ul>
                        </div>
                     </div>
                     <div className="contact-box contactbox3">
                        <div className="box-logo-contact">
                            <img className="logo-icons" src='/gmail-logo.png'/>
                        </div>
                        <div className="description-contact">
                                <ul>
                                    <li><a href="#"><p>prasitp65@nu.ac.th</p></a></li>
                                    <li><a href="#"><p>singthai5109@gmail.com</p></a></li>
                                </ul>
                        </div>
                     </div>
               </div>
        </div>
    );
};

export default Contact;
