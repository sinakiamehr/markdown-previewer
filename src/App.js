import { marked } from "marked";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [text, setText] = useState("");
  const initialText = `
# Heading 1

## Subheading (H2)

[This is a link](https://www.example.com)

Here is some \`inline code\`.

\`\`\`
This is a code block
with multiple lines.
\`\`\`

- This is a list item.

> This is a blockquote.

![Alt text for image](https://via.placeholder.com/150)

**This is bolded text.**
`;
  const handleChange = (e) => {
    const output = e.target.value;
    setText(output);
  };

  useEffect(() => {
    setText(initialText);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <label for="editor">Editor</label>
        <textarea
          id="editor"
          type="text"
          onChange={handleChange}
          value={text}
        ></textarea>
        <label for="preview">Previewer</label>
        <textarea id="preview" value={marked(text)}></textarea>
      </header>
    </div>
  );
}

export default App;
