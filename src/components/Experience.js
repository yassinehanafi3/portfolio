import React from "react";
import '../static/css/experience.style.css';
  
const experiences = [
    {
        "id" : "CEGEDIM",
        "fullEntrepriseTitle" : "CEGEDIM",
        "title": "Software Engineering Intern ",
        "link" : "https://www.linkedin.com/company/cegedim/",
        "date" : "JULY 2022 - SEPT 2022",
        "description" : 'I designed and built a web application "Poker Planning" to enable SCRUM team members to collaborate and estimate the relative size or effort required for user stories or tasks.',
        "outils" : "Skills: Spring Framework · Angular · MySQL · Spring Boot · Java · Web Development · Scrum",
        "active" : true
    },
    {
        "id" : "MEN",
        "fullEntrepriseTitle" : "Direction Provenciale de l'éducation nationale",
        "title": "Software Engineering Intern ",
        "link" : "https://www.men.gov.ma/",
        "date" : "MARS 2021 - MAY 2021",
        "description" : 'The design and development of a web application called "Tawajooh" that facilitates the management of applications from high school students.',
        "outils" : "Skills: HTML · CSS · JavaScript · Flask · Firebase RealTime Database",
        "active" : false
    }
]

export function Experience() {
    return(
        <div id="experience" className="experience-wrapper container">
            <h3 className="title">/experience</h3>
            <br />
            <div className="tab" style={{paddingTop : 10}} >
                <button className="tablinks active" onClick={(e) => {openExperience(e, "CEGEDIM")}}>CEGEDIM</button>
                <button className="tablinks" onClick={(e) => {openExperience(e, "MEN")}}>Direction Provenciale de l'éducation nationale</button>
            </div>
            {experiences.map(item => (
                <div id={item.id} className={"tabcontent " + (item.active ? 'active' : '')} >
                    <div className="job-title" style={{paddingTop : 10}}>{item.title} <a href={item.link}>@{item.id}</a>  </div>
                    <div className="job-date">{item.date}</div>
                    <div className="job-description">
                    <p>{item.description}</p>
                    <p> 
                        <strong>{item.outils}</strong> 
                    </p>
                    </div>
                </div>
            ))}
            <br />
        </div>
    );
}

const openExperience = (evt, entrepriseName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(entrepriseName).style.display = "block";
    evt.currentTarget.className += " active";
}