
import React, { useState } from 'react';
import FormField from '../../Forms/FormField';
import FormActions from '../../Forms/FormActions';
import Popup from '../../Forms/PopUp';

const FormPreview = ({ schema }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Validation field
  const validate = () => {
    const newErrors = {};
    schema.fields.forEach((field) => {
      if (field.required && !formData[field.id]) {
        newErrors[field.id] = `${field.label} is required.`;
      }
      if (field.validation?.pattern && !new RegExp(field.validation.pattern).test(formData[field.id])) {
        newErrors[field.id] = field.validation.message;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form Submisssssion
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setSubmissions((prevSubmissions) => [...prevSubmissions, formData]);
      setIsSubmitting(false);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 1500); 
    }, 2000);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">{schema.formTitle}</h2>
      <p className="mb-6 text-lg">{schema.formDescription}</p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {schema.fields.map((field, index) => (
          <FormField
            key={index}
            field={field}
            value={formData[field.id]}
            error={errors[field.id]}
            onChange={handleChange}
          />
        ))}

        <FormActions
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
        />
      </form>

      {showPopup && <Popup message=" Submitted Successfully!" onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default FormPreview;
