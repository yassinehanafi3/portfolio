import React from "react";
import '../static/css/intro.style.css';
import myImage from '../static/images/img.jpg';
import ContactModal from "./ContactModal";



export function Intro() {
    return (
        <div id="intro" className="intro-wrapper container">
            <div className="intro-title">
                Hi,<span className="intro-name"> EL HANAFI </span> here.
            </div>
            <div className="intro-paragraph" style={{marginTop : 10}}>
                <div className="row">
                    <div className="col-6">
                    <p style={{paddingTop : 20}}>
                        I'm a passionate software engineering student based in Marrakech
                        with a strong background in programming and solid experience in
                        software development.
                    </p>
                    <ContactModal/>

                    </div>
                    <div className="col-6">
                    <img className="intro-img" src={myImage} alt="profile" />
                    </div>
                </div>
                
            </div>
            
        </div>
        
    );
}