import React from "react";
import CodeSnippet from "../../components/codeSnippet/codeSnippet.component";


const Routes = ()=>{
    return(
        <div className='root'>
            <h1 className='h-1' >Routing</h1>
            <h2 className='h-22' >Adding Browser router to index.js file</h2>
            <CodeSnippet language='jsx' codeString={`
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

`}/>
            <h2 className='h-2' >Adding Routes in App.js file</h2>

            <CodeSnippet language='jsx' codeString={`
import React from 'react';
import HomePage from "./pages/homepage/homePage.component";
import {Route,Switch} from 'react-router-dom'
const HatsPage = ()=>(
    <div>Hats Page</div>
)
function App() {
    return (
        <div className="App">
            <Switch>
                <Route  path='/' exact component={HomePage}/>
                <Route path='/shop/hats' component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;`}/>
            <h2 className='h-2' >Adding Routes in Menu item component file</h2>
            <CodeSnippet language='jsx' codeString={`
import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size,linkUrl,history,match}) => (
    <div className={\`${"size" === 'large' ? 'large' : null} menu-item \`}>
        <div
            onClick={()=>history.push("${"match.url"} ${"linkUrl"}")}
            className='background-image'
            style={{
                backgroundImage: \`url(${"imageUrl"})\`
            }}/>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);`}/>

        </div>
    )
}

export default Routes;