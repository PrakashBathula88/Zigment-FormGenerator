const FormField = ({ field, value, error, onChange }) => {
    return (
      <div className="space-y-2">
        <label className="block text-gray-800 font-medium">{field.label}</label>
        <input
          type={field.type}
          name={field.id}
          value={value || ''}
          onChange={onChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  };
  
  export default FormField;
  