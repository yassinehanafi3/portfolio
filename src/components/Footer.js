import React from "react";
import '../static/css/footer.style.css'

const currentYear = new Date().getFullYear(); 


export function Footer() {
    return(
        <div className="footer-wrapper">
             <footer> <div>Copyright &copy; {currentYear} <span className="author">Yassine EL HANAFI</span>. All Rights Reserved</div> </footer> 
        </div>
    );
}