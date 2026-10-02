import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Competencies from "./components/Competencies";
import Pipeline from "./components/Pipeline";
import Projects from "./components/Projects";
import Architecture from "./components/Architecture";
import Milestones from "./components/Milestones";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Competencies />
        <Pipeline />
        <Projects />
        <Architecture />
        <Milestones />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
