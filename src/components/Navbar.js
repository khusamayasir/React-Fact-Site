import React from "react"
import reactLogo from "../images/react-icon-small.png"

export default function Navbar(props) {
    return (
        <nav  className={props.darkMode ? "dark navbar": "navbar"}> 
            <div className="nav--logo">
            <img src= {reactLogo} 
            alt="React Logo" 
            className="nav--icon" />
            <h1>ReactFacts</h1>
            </div>
            <p> <span className={props.darkMode?"darkText":"light"}>Dark</span>  {<i onClick={props.toggleDarkMode} class={props.DarkMode ? "fa-solid fa-toggle-off fa-2x" : "fa-solid fa-toggle-on fa-2x"}></i>} <span className={props.darkMode?"darkText":"light"}>Light</span> </p>
        </nav>
    )
}