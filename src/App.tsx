import React, { useState } from 'react';
import './App.css';
import { Remarkable } from 'remarkable';
import { linkify } from 'remarkable/linkify';
import externalLink from 'remarkable-external-link';

function App() {
  const defaultInput = "# My TODO\n1. Eat\n1. Sleep\n1. Have fun\n# Your TODO\n* Work\n* Work\n* Work"
  const remarkable = new Remarkable({
    html: false,
    breaks: true,
    typographer: false,
  })
    .use(linkify)
    .use(externalLink);
  const textAreaStyle = {
    height: '13em',
    lineHeight: '1.3',
    minWidth: '90vh',
  };
  const outputStyle = {
    height: '13em',
    lineHeight: '1.3',
    minWidth: '90vh',
    paddingLeft: '5vh',
    textAlign: 'left',
  };
  const [input, updateInput] = useState(defaultInput);

  return (
    <div className="App">
      <h1>Input your Markdown</h1>
      <textarea
        id="markdown-content"
        defaultValue={input}
        onChange={(e: any) => {
          updateInput(e.target.value);
        }}
        style={textAreaStyle}
      />
      <div
        className="md"
        dangerouslySetInnerHTML={{ __html: remarkable.render(input) }}
        style={outputStyle as any}
      />
    </div>
  );
}

export default App;
