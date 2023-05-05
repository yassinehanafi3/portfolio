import React from "react";
import '../static/css/about.style.css';


export function About() {
    return(
        <div id="about" className="about-wrapper container">
            <h3 className="title">/about</h3>
            <br />
            <div className="paragraph" style={{paddingTop : 10}}>
                <p>I am currently a software engineering student at ENSET Mohammedia.
                Throughout my studies, I have gained valuable skills and experience that have prepared me for a successful career in the technology industry. </p>
                <p>Here are some fun facts about me :</p>
                <ul>
                    <li>📖 I Learn anything my hands get on</li>
                    <li>🎮 I Play video games for fun</li>
                    <li>🍵 I Refuse to code without drinking my green tea</li>
                    <li>🌐 I Have 50 internet tabs open at any given time</li>
                </ul>
                <p>Here are some technologies I have been working with:</p>
                <ul className="technologiesList">
                    <li><img height={30} width={80} src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"/></li>
                    <li><img height={30} width={80} src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"/></li>
                    <li><img height={30} width={80} src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></li>
                    <li><img height={30} width={80} src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=yellow"/></li>
                    <li><img height={30} width={80} src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/></li>
                    <li><img height={30} width={80} src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"/></li>
                    
                </ul>
            </div>
        </div>
    );
}