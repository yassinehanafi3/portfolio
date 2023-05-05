import React from "react";
import '../static/css/sidebar.style.css';

export function SideBar(props) {
  return (
    <div className="sidenav">
      <ul className="nav-links">
        <li><a href={`#${props.intro}`}>/home</a></li>
        <li><a href={`#${props.about}`}>/about</a></li>
        <li><a href={`#${props.experience}`}>/experience</a></li>
        <li><a href={`#${props.projects}`}>/projects</a></li>
      </ul>
    </div>
            
  );
}
