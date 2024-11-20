
import React from 'react';

const CopyFormJsonButton = ({ formData }) => {
  const copyFormJson = () => {
    const json = JSON.stringify(formData, null, 2);
    navigator.clipboard.writeText(json)
      .then(() => alert('Form JSON copied to clipboard!'))
      .catch(() => alert('Failed to copy Form JSON.'));
  };

  return (
    <button
      type="button"
      onClick={copyFormJson}
      className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
    >
      Copy Form JSON
    </button>
  );
};

export default CopyFormJsonButton;
