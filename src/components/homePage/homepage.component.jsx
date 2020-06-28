import React from 'react'
import {Link, useRouteMatch, Route, BrowserRouter as Router} from "react-router-dom";
import ProjectSetup from "../ProjectStup/projectSetup";

export const Homepage = () => {

    const {url, path} = useRouteMatch();
    console.log(url, path)

    return (
        <div className='homepage'>
            <div className="directory-menu">
                <div>
                    <Link to={`${url}home/project-setup`}>Initial Project Setup</Link>
                </div>
                <div>
                    <Link to={`${url}home/react-router`}>React Router</Link>

                </div>
            </div>


        </div>
    )
}
