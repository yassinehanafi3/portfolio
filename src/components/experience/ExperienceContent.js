import React from "react";


export function ExperienceContent({props}) {
    console.log(props)
    return(
            <div id={props.id} className={"tabcontent " + (props.active ? 'active' : '')} >
                <div className="job-title" style={{paddingTop : 10}}>{props.title} <a href={props.link}>@{props.id}</a>  </div>
                <div className="job-date">{props.date}</div>
                <div className="job-description">
                    <p>{props.description}</p>
                    <p> 
                        <strong>{props.outils}</strong> 
                    </p>
                </div>
            </div>
    );
}