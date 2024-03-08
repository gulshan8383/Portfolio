import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallex/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Carasoul from "./components/carasoul/Carasoul";




// import Test from "./Test"



function App() {
  return (

    <div className="maindiv">
    
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <section id="parallax1">
        <Parallax type="services" />
      </section> 

      <section id="Services">
        <Services />
      </section>

      <section id="Parallax">
        <Parallax type="portfolio"/>
      </section>
      
     <Portfolio />
     
       <section id="Calling">
        <Contact/>
      </section>
     


    </div>



  );
}

export default App;
