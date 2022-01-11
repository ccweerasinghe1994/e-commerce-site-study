import React from "react";
import "./HomePage.styles.scss";
import { Link, Route, Switch } from "react-router-dom";
import V1 from "../../Notes/ProjectStructure/v1";
import V2 from "../../Notes/ProjectStructure/v2";

const HomePage = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="header">Chapter name No</div>
        <div className="picture">
          <img
            src="https://cdn-icons.flaticon.com/png/512/1195/premium/1195017.png?token=exp=1633837282~hmac=bd7ca1fcb99c3437e20332afc9fd63c2"
            alt=""
          />
        </div>
        <div className="sub-topics">
          <ol>
            <li>sub topic 1</li>
            <li>sub topic 1</li>
            <li>sub topic 1</li>
            <li>sub topic 1</li>
            <li>sub topic 1</li>
          </ol>
        </div>
      </div>
      <div className="item">
        <div className="header">Chapter 1</div>
        <div>
          <Link className="link" to="/project-setup/1">
            Create a React app
          </Link>
          <Link className="link" to="/project-setup/2">
            Creating the Folder Structure
          </Link>
          <Link className="link" to="/project-setup/3">
            Adding hover effect
          </Link>
        </div>
      </div>
      <div className="item">
        <div className="header">Chapter 2</div>
        <div>
          <Link className="link" to="/project-routing">
            Project Routing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
