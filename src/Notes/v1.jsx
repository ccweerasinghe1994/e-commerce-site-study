import React from 'react';
import CodeSnippet from "../components/codeSnippet/codeSnippet.component";


const v1 =()=>{
    return(
        <div>
            <h2 className='h-1' >Create a React app</h2>
            <CodeSnippet language='node' codeString={`npx create-react-app app-name`}/>
        </div>
    )
}