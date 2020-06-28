import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import {dracula} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  tomorrow,
} from "react-syntax-highlighter/dist/esm/styles/prism";
const CodeSnippet = ({ codeString, language }) => {
  return (
    <SyntaxHighlighter
      customStyle={{
        border: "1px solid #8a6363",
        minWidth: "380px",
        margin: "1rem 4rem",
        display: "inline-block",
        fontSize: "1.6rem",
      }}
      language={language}
      style={tomorrow}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;
