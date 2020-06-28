import React from 'react';
import {Link,Route,useRouteMatch,BrowserRouter as Router} from 'react-router-dom';
import V1 from "../../Notes/v1";

const ProjectSetup =()=>{
    const {url,path} = useRouteMatch();
    return(
        <div>
            <h1>Creating the React App</h1>
            <Link to={`${url}/project-setup`}>Project Setup</Link>


            <Route path={
                `${path}/project-setup`
            }
            render={()=>(
                <V1/>
            )}/>
        </div>
    )
}

export default ProjectSetup;