import React, { useEffect, useState } from "react";
import WOW from "wowjs/dist/wow";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Services from "./components/Services";
import WorkFlow from "./components/WorkFlow";
import Achievements from "./components/Achievements";
import "./App.css";

const App = () => {
  const [landing, setLanding] = useState(null);
  const [about, setAbout] = useState(null);
  const [workflow, setWorkflow] = useState(null);
  const [services, setServices] = useState(null);
  const [contact, setContact] = useState(null);

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
      <Landing setLanding={setLanding} />
      <About setAbout={setAbout} />
      <WorkFlow setWorkflow={setWorkflow} />
      <Achievements />
      <Services setServices={setServices} />
      <Contact setContact={setContact} />
      <Footer />
    </>
  );
};

export default App;
