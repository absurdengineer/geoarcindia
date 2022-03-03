import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import "./App.css";
import ManpowerServices from "./views/ManpowerServices";
import ScrollToTop from "./components/ScrollToTop";
import FacilityManagement from "./views/FacilityManagement";
import SurveyingAndMapping from "./views/SurveyingAndMapping";
import OnlineInvigilationServices from "./views/OnlineInvigilationServices";
import GIS from "./views/GIS";
import CustomizeSoftware from "./views/CustomizeSoftware";

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="manpower-services" element={<ManpowerServices />} />
          <Route path="facility-management" element={<FacilityManagement />} />
          <Route
            path="surveying-and-mapping"
            element={<SurveyingAndMapping />}
          />
          <Route
            path="online-invigilation-services"
            element={<OnlineInvigilationServices />}
          />
          <Route path="gis" element={<GIS />} />
          <Route path="customize-software" element={<CustomizeSoftware />} />
        </Route>
      </Routes>
    </ScrollToTop>
  );
};

export default App;
