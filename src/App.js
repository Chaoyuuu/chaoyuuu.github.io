import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import './App.css';

export default function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <section style={{ overflow: 'hedden' }} class="h-2 w-100">
        <div>
          <div style={{width: "100vw", height:"88px"}}>
            <div style={{opacity: 1, transform: "translate3d(0,0,0)" }}>
              <div className="dd-color dd-blue"></div>
              <div className="dd-color dd-orange"></div>
              <div className="dd-color dd-yellow-orange"></div>
              <div className="dd-color dd-blue-yellow"></div>
            </div>
          </div>
        </div>
      </section>
      <Hero/>
      <About />
      <Work />
      <Experience/>
      <Skills/>
      <Contact />
    </div>
  );
}
