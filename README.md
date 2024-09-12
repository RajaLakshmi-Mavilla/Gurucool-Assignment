# Gurucool-Assignment
Multi-Step Form with React
This project is a multi-step form implemented using React. It includes tabbed navigation, form validation, and data handling with local storage. The form consists of three steps: Personal Information, Address Information, and a Confirmation page. It also includes styling for a clean and responsive user interface.

Features
Tabbed Navigation: Navigate through the form steps with tabbed buttons.
Form Validation: Validates input fields to ensure proper formats (e.g., email, phone number, zip code).
Local Storage: Stores form data in local storage to persist user inputs across page reloads.
Responsive Design: The form is styled to be responsive and user-friendly across different devices.
Conditional Navigation: Disables the Back button on the first step and the Next button on the last step until validation is complete.
Getting Started
Project Structure
App.js: The main component that handles step navigation, validation, and form data management.
PersonalInfo.js: A component for capturing personal information (name, email, phone).
AddressInfo.js: A component for capturing address details (address line 1, address line 2, city, state, zip code).
Confirmation.js: A component that displays the summary of all the input data for confirmation.
App.css: The CSS file that provides styling for the form and navigation buttons.
Form Validation
Personal Information:
Email: Must be a valid email format (e.g., example@domain.com).
Phone: Must be a 10-digit number.
Address Information:
Zip Code: Must be a 5 or 6-digit number.
Using the Application
Navigate through the Form: Use the Next and Back buttons to move between form steps.
Fill in Required Fields: Ensure all required fields are filled out correctly before moving to the next step.
Submit the Form: On the final step, review the information and click Submit to complete the form.
Example Usage
Personal Information:

Name: John Doe
Email: john.doe@example.com
Phone: 1234567890
Address Information:

Address Line 1: 123 Main St
Address Line 2: Apt 4B
City: Anytown
State: CA
Zip Code: 12345
Troubleshooting
Form Data Not Resetting: Ensure you call localStorage.removeItem("formData") after submission to clear the stored data.
Validation Errors: Check the validation logic in validateStep function and make sure that input fields conform to the specified formats.
Contributing
If you want to contribute to this project, feel free to submit a pull request or open an issue. All contributions are welcome!



