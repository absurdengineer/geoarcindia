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
import BackToTop from "./components/BackToTop";

const App = () => {
  const [aboutRef, setAboutRef] = useState(null);
  const [homeRef, setHomeRef] = useState(null);
  const [servicesRef, setServicesRef] = useState(null);
  const [workflowRef, setWorkflowRef] = useState(null);
  const [contactRef, setContactRef] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
  const [showBack, setShowBack] = useState(false);

  const scrollListerner = () => {
    const scrollPos = document.documentElement.scrollTop + 10;
    const home = document.getElementById("home").offsetTop;
    const about = document.getElementById("about").offsetTop;
    const services = document.getElementById("services").offsetTop;
    const workflow = document.getElementById("workflow").offsetTop;
    const contact = document.getElementById("contact").offsetTop;
    if (scrollPos >= home && scrollPos < about) setActiveTab("home");
    else if (scrollPos >= about && scrollPos < workflow) setActiveTab("about");
    else if (scrollPos >= workflow && scrollPos < services)
      setActiveTab("workflow");
    else if (scrollPos >= services && scrollPos < contact)
      setActiveTab("services");
    else setActiveTab("contact");
    if (scrollPos >= about) setShowBack(true);
    else setShowBack(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const wow = new WOW.WOW({
        live: false,
      });
      wow.init();
    }
    document.addEventListener("scroll", scrollListerner);
    return () => {
      document.removeEventListener("scroll", scrollListerner);
    };
  }, []);

  return (
    <>
      <Navbar
        aboutRef={aboutRef}
        homeRef={homeRef}
        servicesRef={servicesRef}
        workflowRef={workflowRef}
        contactRef={contactRef}
        activeTab={activeTab}
      />
      <Landing setHomeRef={setHomeRef} />
      <About setAboutRef={setAboutRef} />
      <WorkFlow setWorkflowRef={setWorkflowRef} />
      <Achievements />
      <Services setServicesRef={setServicesRef} />
      <Contact setContactRef={setContactRef} />
      <Footer
        aboutRef={aboutRef}
        homeRef={homeRef}
        servicesRef={servicesRef}
        workflowRef={workflowRef}
        contactRef={contactRef}
      />
      {showBack && <BackToTop />}
    </>
  );
};

export default App;
