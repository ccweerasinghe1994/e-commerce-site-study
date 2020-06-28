import React from 'react';
import CodeSnippet from "../../components/codeSnippet/codeSnippet.component";


const V1 =()=>{
    return(
        <div className='root' >
            <h2 className='h-1' >Create a React app</h2>
            <CodeSnippet language='node' codeString={`npx create-react-app app-name`}/>
            <h2 className='h-2' >Layout Output</h2>
            <div className="example-layout">
                <div className="homepage">
                    <div className="directory-menu">
                        <div className="menu-item">
                            <div className="content">
                                <h1 className="title">HATS</h1>
                                <span className="subtitle">SHOP NOW</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="content">
                                <h1 className="title">Jacket</h1>
                                <span className="subtitle">SHOP NOW</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="content">
                                <h1 className="title">Sneakers</h1>
                                <span className="subtitle">SHOP NOW</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="content">
                                <h1 className="title">Mens</h1>
                                <span className="subtitle">SHOP NOW</span>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="content">
                                <h1 className="title">Women</h1>
                                <span className="subtitle">SHOP NOW</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <h2 className='h-2' >Markup</h2>
            <CodeSnippet language='jsx' codeString={`
import React from "react";
import './homePage.styles.scss';
const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">HATS</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Jacket</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Sneakers</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Mens</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">Women</h1>
                        <span className="subtitle">SHOP NOW</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;
            `} />
            <h2 className="h-2">Styles</h2>
            <CodeSnippet language='scss' codeString={`
$color-black:#4a4a4a;
.homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 8rem;
}

.directory-menu {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
}

.menu-item {
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 .75rem 1.5rem;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  .content {
    height: 9rem;
    padding:0 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    .title{
      font-weight: bold;
      margin-bottom: .6rem;
      font-size: 2.2rem;
      color:$color-black;
    }
    .sub-title{
      font-size: 1.6rem;
      font-weight: lighter;
    }
  }
}`}/>

        </div>
    )
}

export default V1;