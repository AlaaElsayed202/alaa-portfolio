import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certificates/Certificates";
import Projects from "./components/Projects/Projects";
import LearningNext from "./components/LearningNext/LearningNext";
import Journey from "./components/Journey/Journey";
import Contact from "./components/Contact/Contact";

import useScrollAnimations from "./animations/useScrollAnimations";

function App() {
  useScrollAnimations();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Certificates />
        <Projects />
        <LearningNext />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}

export default App;
