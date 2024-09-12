import React from "react";

const NavigationButtons = ({ step, nextStep, prevStep, handleSubmit }) => {
  return (
    <div className="buttons">
      {step > 1 && <button onClick={prevStep}>Back</button>}
      {step < 3 ? (
        <button onClick={nextStep}>Next</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default NavigationButtons;
