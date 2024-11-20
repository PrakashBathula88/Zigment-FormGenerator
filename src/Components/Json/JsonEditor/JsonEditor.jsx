
import React from 'react';
import MonacoEditor from 'react-monaco-editor';

// i used MOnaccoeditor for the better usability one of the React package for EDiting
const MonacoEditorComponent = ({ value, onChange }) => {
  const options = {
    selectOnLineNumbers: true,
    automaticLayout: true,
    minimap: {
      enabled: false,
    },
  };

  return (
    <MonacoEditor
      width="100%"
      height="500px"
      language="json"
      theme="vs-dark"
      value={value}
      options={options}
      onChange={onChange}
    />
  );
};
export default MonacoEditorComponent;
