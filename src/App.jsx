import React, { useEffect } from "react";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import WOW from "wowjs/dist/wow";
import About from "./components/About";
import "./App.css";
import Footer from "./components/Footer";
import WorkFlow from "./components/WorkFlow";
import Achievements from "./components/Achievements";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const wow = new WOW.WOW({
        live: false,
      });
      wow.init();
    }
  }, []);

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <WorkFlow />
      <Achievements />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
