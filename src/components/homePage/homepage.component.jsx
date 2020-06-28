import React from 'react'
import {Link, useRouteMatch, Route,BrowserRouter as Router } from "react-router-dom";
import ProjectSetup from "../ProjectStup/projectSetup";

export const Homepage = () => {

    const {url,path} = useRouteMatch();

    return (
        <Router>
            <h2 className="h-1">
             Home Page
            </h2>

            <Link className='link'   to={`${url}project-setup`}>Project Setup</Link>



            <Route exact path={`${path}project-setup`} render={() => <ProjectSetup/>}/>


        </Router>
    )
}
