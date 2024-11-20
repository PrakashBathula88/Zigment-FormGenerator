
import React from 'react';

const DownloadButton = ({ submissions }) => {
  const downloadJson = () => {
    const blob = new Blob([JSON.stringify(submissions, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'submissions.json';
    link.click();
  };

  return (
    <button
      type="button"
      onClick={downloadJson}
      className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
    >
      Download Submissions
    </button>
  );
};

export default DownloadButton;
