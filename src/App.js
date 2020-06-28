import React,{Fragment}  from "react";
import "./App.css";

import V3 from "./Notes/v3";
 import NavBar from "./components/navbar/navbar.component";
 import { Link, Route,Switch } from "react-router-dom";
 import { MenuItem,Grid } from "@material-ui/core";
import HomePage from "./pages/HomePage/HomePage.page";
import V1 from "./Notes/v1";
import V2 from "./Notes/v2";
// import { Homepage } from "./components/homePage/homepage.component";
// import { Login } from "./components/login/login.component";
// import ProjectSetup from "./components/ProjectStup/projectSetup";


function App() {
  return (
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/project-setup/1' component={V1}/>
          <Route exact path='/project-setup/2' component={V2}/>
          <Route exact  path='/project-setup/3' component={V3}/>
      </Switch>


    //
    //
    //
    //
    //

  );
}

export default App;
