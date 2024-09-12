import React, { useState, useEffect } from "react";
import PersonalInfo from "./components/PersonalInfo";
import AddressInfo from "./components/AddressInfo";
import Confirmation from "./components/Confirmation";
import "./styles.css";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      alert("Form submitted!");

      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
      });

      // Reset current step
      setCurrentStep(0);

      // Remove data from local storage
      localStorage.removeItem("formData");
    }
  };

  const validateStep = (step) => {
    let stepErrors = {};
    if (step === 0) {
      if (!formData.name) stepErrors.name = "Name is required";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
        stepErrors.email = "Valid email is required";
      if (!formData.phone || !/^\d{10}$/.test(formData.phone))
        stepErrors.phone = "Valid 10-digit phone number is required";
    }
    if (step === 1) {
      if (!formData.address1)
        stepErrors.address1 = "Address Line 1 is required";
      if (!formData.city) stepErrors.city = "City is required";
      if (!formData.state) stepErrors.state = "State is required";
      if (!formData.zip || !/^\d{5,6}$/.test(formData.zip))
        stepErrors.zip = "Valid zip code is required";
    }
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const updateFormData = (data) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, ...data };
      localStorage.setItem("formData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfo
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 1:
        return (
          <AddressInfo
            formData={formData}
            updateFormData={updateFormData}
            errors={errors}
          />
        );
      case 2:
        return <Confirmation formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <div className="tab-navigation">
        <button className={currentStep === 0 ? "active-tab" : ""} disabled>
          Step 1
        </button>
        <button className={currentStep === 1 ? "active-tab" : ""} disabled>
          Step 2
        </button>
        <button className={currentStep === 2 ? "active-tab" : ""} disabled>
          Step 3
        </button>
      </div>
      {renderStep()}
      <div className="navigation-buttons">
        <button onClick={handleBack} disabled={currentStep === 0}>
          Back
        </button>
        {currentStep < 2 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default App;
