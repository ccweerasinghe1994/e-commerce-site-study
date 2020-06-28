import React from 'react';
import CodeSnippet from "../../components/codeSnippet/codeSnippet.component";
import HomePage from "../../components/pages/homepage/homePage.component";


const V3 =()=>{
    return(
        <div className='root'>
            <h1 className="h-1">Adding hover Effect</h1>

            <div className="example-layout">
                <HomePage/>
            </div>
                <h2 className="h-2">Menu Item Component</h2>
                <CodeSnippet codeString={`
import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => (
    <div className={\`${"size" === 'large' ? 'large' : null} menu-item \`}>
        <div
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

export default MenuItem;`} language='jsx'/>
                <h2 className="h-2">Menu Item Component styles</h2>
                <CodeSnippet codeString={`
                
$color-background-white: white;
.menu-item {

  position: relative;
  overflow: hidden;
  
  .content {
    background-color: $color-background-white;
    opacity: 0.7;
    font-family: 'Montserrat Subrayada', sans-serif;
    position: absolute;

  }

  .background-image {
    height: 100%;
    width: 100%;
    background-position: center;
    background-size: cover;

  }

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }
}

`} language='scss'/>
        </div>
    )
}

export default V3;