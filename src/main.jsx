import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gallery from "./Gallery.jsx";
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Project from "./Project.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="container">
          <Home />
          <Gallery/>
          <AboutMe/>
          <Project/>
      </div>

  </StrictMode>,
)
