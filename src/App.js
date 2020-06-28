import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./components/navbar/navbar.component";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import { Homepage } from "./components/homePage/homepage.component";
import { Login } from "./components/login/login.component";

function App() {
  return (
    <Router>
      <NavBar
        MenuItems={() => (
          <Fragment>
            <MenuItem component={Link} to='/'>
              Home
            </MenuItem>
            <MenuItem component={Link} to='/login'>
              Login
            </MenuItem>
          </Fragment>
        )}
      />

     
    </Router>
  );
}

export default App;
