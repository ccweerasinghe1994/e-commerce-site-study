import React from 'react';
import './HomePage.styles.scss';
import {Link, Route, Switch} from "react-router-dom";
import V1 from "../../Notes/ProjectStructure/v1";
import V2 from "../../Notes/ProjectStructure/v2";

const HomePage = () => {
    return (
        <div className='main'>
            <div className='item'>
                <div className="header">Chapter 1</div>
                <div>

                    <Link className='link' to='/project-setup/1'>Create a React app</Link>
                    <Link className='link' to='/project-setup/2'>Creating the Folder Structure</Link>
                    <Link className='link' to='/project-setup/3'>Adding hover effect</Link>

                </div>


            </div>
            <div className='item'>
                <div className="header">Chapter 2</div>
                <div>

                    <Link className='link' to='/project-routing'>Project Routing</Link>


                </div>

            </div>


        </div>
    )
}

export default HomePage;