const FormActions = ({ isSubmitting,  onCopyJson, onDownloadJson }) => {
    return (
      <div className="flex items-center space-x-4 mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
  
        <button
          type="button"
          onClick={onCopyJson}
          className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Copy Form JSON
        </button>
  
        <button
          type="button"
          onClick={onDownloadJson}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Download Submissions
        </button>
      </div>
    );
  };
  
  export default FormActions;
  