import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "aos/dist/aos.css";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
