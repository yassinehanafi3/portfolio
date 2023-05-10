import React from "react";
import '../../static/css/projects.style.css';
import { ProjectCard } from "./ProjectCard";

const projects = [
    {
        "id" : 1,
        "title": "Cliffford",
        "description": "Application containing a ChatBot using LSTM and a Hand detector in real time using CNN.",
        "outils": "Tools : Flask - CNN - LSTM - FireBase",
        "github": "https://github.com/yassinehanafi3/Cliffford"
    },
    {
        "id" : 2,
        "title": "Poker Planning",
        "description": "Application to enable SCRUM team members to collaborate and estimate the relative size or effort required for user stories or tasks.",
        "outils": "Tools : Spring - Angular - MySQL",
        "github": "https://github.com/yassinehanafi3/pokerplanning-backend"
    },
    {
        "id" : 3,
        "title": "Tawajooh",
        "description": "Application that facilitates the management of applications from high school students.",
        "outils": "Tools : Flask - HTML - CSS - JavaScript - BootStrap",
        "github": "https://github.com/yassinehanafi3/Tawajooh"
    },
    {
        "id" : 4,
        "title": "Hospital Management",
        "description": "Application to help users schedule appointments more efficiently",
        "outils": "Tools : JavaFX - MongoDB - RediS",
        "github": "https://github.com/yassinehanafi3/Gestion_Hopital_ENSET"
    }, {
        "id" : 5,
        "title": "Blogger",
        "description": "Application that allows individuals to create and publish personal articles.",
        "outils": "Tools : ExpressJs - Prisma ORM - MySQL",
        "github": "https://github.com/yassinehanafi3/blogger"
    }
]

export function Projects() {
    return (
        <div id="projects" className="projects-wrapper container">
            <h3 className="title">/projects</h3>
            <br />
            <div className="row row-cols-1 row-cols-md-3 d-flex align-items-stretch">
                {projects.map(item => (
                    <ProjectCard props={item}/>
                ))}
            </div>
        </div>


    );
}