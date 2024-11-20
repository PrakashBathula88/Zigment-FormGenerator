import React, { useState, useEffect } from "react";
import MonacoEditorComponent from "./Components/Json/JsonEditor/JsonEditor";
import FormPreview from "./Components/Json/FormPreview/FormPreview";
import SplitPane from "react-split-pane";

const initialJson = `{
  "formTitle": "Project Requirements Survey",
  "formDescription": "Please fill out this survey about your project needs",
  "fields": [
    {
      "id": "name",
      "type": "text",
      "label": "Full Name",
      "required": true
    }
  ]
}`;

const App = () => {
  const [jsonContent, setJsonContent] = useState(initialJson);
  const [formData, setFormData] = useState(JSON.parse(initialJson));
  const [darkMode, setDarkMode] = useState(false);

  const handleJsonChange = (newJson) => {
    setJsonContent(newJson);
    try {
      const parsedJson = JSON.parse(newJson);
      setFormData(parsedJson);
    } catch (error) {
      console.error("Invalid JSON:", error);
      setFormData(null);
    }
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`h-screen ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } relative transition-all duration-300`}
    >
      <div
        className="fixed top-4 right-4 p-3 rounded-full bg-gray-800 text-white cursor-pointer shadow-lg z-50"
        onClick={toggleDarkMode}
        title="Toggle Dark Mode"
      >
        {darkMode ? "🌙" : "🌞"}
      </div>

      <div className="text-center py-8">
        <h1 className="text-3xl font-bold mb-4">Dynamic Form Generator</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Edit the JSON schema on the left, and see the live form preview on the
          right!
        </p>
      </div>

      <SplitPane
        split="vertical"
        minSize={200}
        defaultSize="50%"
        className="h-full"
      >
        <div className="w-full p-4 bg-white dark:bg-black">
          <MonacoEditorComponent
            value={jsonContent}
            onChange={handleJsonChange}
          />
        </div>

        <div className="w-full p-4 bg-white dark:bg-black">
          {formData ? (
            <FormPreview schema={formData} />
          ) : (
            <p className="text-red-500">Invalid JSON</p>
          )}
        </div>
      </SplitPane>
    </div>
  );
};

export default App;
