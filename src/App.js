import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function App() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    favClass: "1",
  });
  const [validationStates, setValidationStates] = useState({
    emailState: true, // True when valid
    passwordState: true, // True when valid
  });

  // Email validation on submit
  const validateEmail = (email) => {
    // Basic email regex for validation
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password must be at least 9 characters long and include letters and numbers
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{9,}$/;
    return passwordRegex.test(password);
  };

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  // Password validation on every change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setFormValues({ ...formValues, password: newPassword });

    // Validate password immediately as user types
    const isValidPassword = validatePassword(newPassword);
    setValidationStates((prevState) => ({
      ...prevState,
      passwordState: isValidPassword,
    }));
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    // Validate email on submit
    const isValidEmail = validateEmail(formValues.email);
    setValidationStates((prevState) => ({
      ...prevState,
      emailState: isValidEmail,
    }));

    if (isValidEmail && validationStates.passwordState) {
      // Call fetch or proceed with form submission
      alert(JSON.stringify(formValues));
    } else {
      alert("Please correct the errors before submitting.");
    }
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
            isInvalid={!validationStates.emailState}
          />
          { !validationStates.emailState && (
            <Form.Text className="text-danger">
              Your email should follow an established format.
            </Form.Text>
          )}
          { validationStates.emailState && (
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={formValues.password}
            isInvalid={!validationStates.passwordState}
          />
          { !validationStates.passwordState && (
            <Form.Text className="text-danger">
              Your password must contain at least 9 characters, including both letters and numbers.
            </Form.Text>
          )}
          { validationStates.passwordState && (
            <Form.Text className="text-muted">
              Your password should have numbers and letters and should be at least 9 characters long.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologías web</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
