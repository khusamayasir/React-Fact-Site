import React from "react"
import Navbar from "./components/Navbar.js"
import Main from "./components/Main.js"

export default function App() {
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className="container">
            <Navbar 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            />
            <Main darkMode={darkMode}/>
        </div>
    )
}