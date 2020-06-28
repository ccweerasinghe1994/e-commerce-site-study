import React,{Fragment}  from "react";
import "./App.css";

import V3 from "./Notes/ProjectStructure/v3";
 import {  Route,Switch } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage.page";
import V1 from "./Notes/ProjectStructure/v1";
import V2 from "./Notes/ProjectStructure/v2";
import Routes from "./Notes/ProjectRoutes/v1";



function App() {
  return (
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/project-setup/1' component={V1}/>
          <Route exact path='/project-setup/2' component={V2}/>
          <Route exact  path='/project-setup/3' component={V3}/>
          <Route exact  path='/project-routing' component={Routes}/>
      </Switch>


    //
    //
    //
    //
    //

  );
}

export default App;
