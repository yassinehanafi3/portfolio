import React from "react";
import '../static/css/sidebar.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export function SideBar(props) {
  return (
    <div className="sidenav">
      <ul className="nav-links">
        <li><a href={`#${props.intro}`}>/home</a></li>
        <li><a href={`#${props.about}`}>/about</a></li>
        <li><a href={`#${props.experience}`}>/experience</a></li>
        <li><a href={`#${props.projects}`}>/projects</a></li>
      </ul>
      <ul className="social-links">
        <li>
          <a href="https://github.com/yassinehanafi3">
            <FontAwesomeIcon icon={faGithub} className="fa fa-github" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/elhanafiyassine/">
            <FontAwesomeIcon icon={faLinkedin} className="fa fa-linkedin" />
          </a>
        </li>
        
      </ul>
    </div>
            
  );
}
