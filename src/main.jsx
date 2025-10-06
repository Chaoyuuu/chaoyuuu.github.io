import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gallery from "./Gallery.jsx";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Project from "./Project.jsx";
import ToggleButton from "./ToggleButton.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ToggleButton/>

        <div className="container">
            <Home/>
            <Gallery/>
            <AboutMe/>
            <Project/>
        </div>

        <footer>
            <div className="social-links">
                <a href="#" className="social-link">GH</a>
                <a href="#" className="social-link">LI</a>
                <a href="#" className="social-link">TW</a>
                <a href="#" className="social-link">EM</a>
            </div>
            <p>© 2025 Alex Chen. Built with passion and curiosity.</p>
        </footer>

    </StrictMode>,
)
