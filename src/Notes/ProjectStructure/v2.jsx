import React from 'react';
import CodeSnippet from "../../components/codeSnippet/codeSnippet.component";
import HomePage from "../../components/pages/homepage/homePage.component";


const V2 = () => {
    return (<div className='root'>
        <h1 className="h-1">Creating the Folder Structure</h1>
        <div className='example-layout' >
            <HomePage/>
        </div>


        <h2 className="h-2">Menu item component</h2>
        <CodeSnippet codeString={`
import React from 'react';

import './menu-item.styles.scss';

const MenuItem=({title,imageUrl,size})=>(
    <div style={{
        backgroundImage:\`url(${"imageUrl"})\`
    }} className={\`${"size" === 'large' ? 'large' : null} menu-item\`}>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;`} language='jsx'/>
    <h2 className="h-2">Menu item component styles</h2>
        <CodeSnippet codeString={`
.menu-item {
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 .75rem 1.5rem;
  background-position: center;
  background-size: cover;

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  $color-black: #4a4a4a;

  .content {
    height: 9rem;
    padding: 0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;

    .title {
      font-weight: bold;
      margin-bottom: .6rem;
      font-size: 2.2rem;
      color: $color-black;
    }

    .sub-title {
      font-size: 1.6rem;
      font-weight: lighter;
    }
  }
}`} language='scss'/>


        <h2 className="h-2">Directory component </h2>
        <CodeSnippet codeString={`
import React, {Component} from 'react';
import MenuItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]

        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({title, id, imageUrl, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    )
                )}
            </div>
        )
    }

}

export default Directory;
        
        `} language='jsx'/>
        <h2 className="h-2">Directory component styles</h2>
        <CodeSnippet codeString={`
.directory-menu {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}

`} language='scss'/>
        <h2 className="h-2">Home Page</h2>
        <CodeSnippet codeString={`
import React from "react";
import './homePage.styles.scss';
import Directory from "../../components/directory/directory.component";

const HomePage = () => {
    return (
        <div className="homepage">
            <Directory/>
        </div>
    )
}

export default HomePage;`} language='jsx'/>
<h2 className="h-2">Home Page styles</h2>
        <CodeSnippet codeString={`
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 8rem;
}



`} language='scss'/>

<h2 className="h-2">App Component</h2>
        <CodeSnippet codeString={`
import React from 'react';
import HomePage from "./pages/homepage/homePage.component";


function App() {
    return (
        <div className="App">
            <HomePage/>
        </div>
    );
}

export default App;`} language='jsx'/>


    </div>)
}

export default V2;