import React  from "react";
import "./App.css";

import V3 from "./Notes/v3";
// import NavBar from "./components/navbar/navbar.component";
// import { Link, BrowserRouter as Router, Route } from "react-router-dom";
// import { MenuItem,Grid } from "@material-ui/core";
// import { Homepage } from "./components/homePage/homepage.component";
// import { Login } from "./components/login/login.component";
// import ProjectSetup from "./components/ProjectStup/projectSetup";


function App() {
  return (
      <div>
          <V3/>
      </div>
    // <Router>
    //   <NavBar
    //     MenuItems={() => (
    //       <Fragment>
    //         <MenuItem component={Link} to='/'>
    //           Home
    //         </MenuItem>
    //         <MenuItem component={Link} to='/login'>
    //           Login
    //         </MenuItem>
    //       </Fragment>
    //     )}
    //   />
    //
    //
    //
    //
    //
    // </Router>
  );
}

export default App;
