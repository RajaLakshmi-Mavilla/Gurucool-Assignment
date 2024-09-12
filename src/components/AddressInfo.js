import React from "react";

const AddressInfo = ({ formData, updateFormData, errors }) => {
  return (
    <div className="form-step">
      <h2>Address Information</h2>
      <div>
        <label>Address Line 1:</label>
        <input
          type="text"
          value={formData.address1}
          onChange={(e) => updateFormData({ address1: e.target.value })}
          required
        />
        {errors.address1 && <span className="error">{errors.address1}</span>}
      </div>
      <div>
        <label>Address Line 2:</label>
        <input
          type="text"
          value={formData.address2}
          onChange={(e) => updateFormData({ address2: e.target.value })}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => updateFormData({ city: e.target.value })}
          required
        />
        {errors.city && <span className="error">{errors.city}</span>}
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          value={formData.state}
          onChange={(e) => updateFormData({ state: e.target.value })}
          required
        />
        {errors.state && <span className="error">{errors.state}</span>}
      </div>
      <div>
        <label>Zip Code:</label>
        <input
          type="text"
          value={formData.zip}
          onChange={(e) => updateFormData({ zip: e.target.value })}
          pattern="[0-9]{5,6}" // Adjust based on the format you expect
          required
        />
        {errors.zip && <span className="error">{errors.zip}</span>}
      </div>
    </div>
  );
};

export default AddressInfo;
