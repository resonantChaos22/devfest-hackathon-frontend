import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

import TestPage from "./pages/test-page/TestPage";
import WelcomeScreen from "./pages/welcome-screen/WelcomeScreen";
import DoctorAdmin from "./pages/DoctorAdmin/DoctorAdmin";
import View from "./pages/DoctorAdmin/View";
export default () => {
  return (
    <div>
      <Router>
        <Route path="/" exact component={WelcomeScreen} />
        <Route path="/dashboard" exact component={DoctorAdmin} />
        <Route path="/view/:id" exact component={View} />
      </Router>
    </div>
  );
};
