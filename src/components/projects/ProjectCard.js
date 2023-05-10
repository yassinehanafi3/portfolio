import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function ProjectCard({props}) {
    console.log(props.id)
    return(
        <div className="col" style={{marginBottom : 15}}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title" style={{paddingBottom : 10}}>
                                    <div className="row">
                                        <div className="col-9">
                                        {props.title}
                                        </div>
                                        <div className="col-3">
                                        <a href={props.github}>
                                        <FontAwesomeIcon icon={faGithub} className="fa fa-github" />
                                    </a>
                                        </div>
                                    </div>
                                </h5>
                                <p className="card-text">
                                    <p>
                                    {props.description}

                                    </p>
                                    <p>
                                    <strong>{props.outils}</strong>
                                    </p>

                                </p>
                            </div>
                        </div>
                    </div>
    );
}