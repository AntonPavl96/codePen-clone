import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

const Editor = (props) => {
  return (
    <div className="editor-container">
      <div className="editor-title">
        displayName
        <button>O/C</button>
      </div>
      <ControlledEditor />
    </div>
  );
};

export default Editor;
