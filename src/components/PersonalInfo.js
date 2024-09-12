import React from "react";

const PersonalInfo = ({ formData, updateFormData, errors }) => {
  return (
    <div className="form-step">
      <h2>Personal Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateFormData({ name: e.target.value })}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
          required
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          pattern="[0-9]{10}" // Ensures a 10-digit phone number
          required
        />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </div>
    </div>
  );
};

export default PersonalInfo;
