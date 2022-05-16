import React, { useState } from "react"
import { Link } from "react-router-dom";
import styled from 'styled-components'

function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    const database = [
      {
        username: "user1",
        password: "pass1",
        role: "manager"
      },
      {
        username: "user2",
        password: "pass2",
        role: "worker"
      }
    ];
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password",
      role: "worker"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      const { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  
    return (
      <LoginStyles className="LoginStyles">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in
              <Link to="/allProjects" className="nav">Go to projects list</Link></div> : renderForm}
        </div>
      </LoginStyles>
    );
  }

  export default Login

  const LoginStyles = styled.div`
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    background-color: #f8f9fd;
  
  input[type="text"],
  input[type="password"] {
    height: 25px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  
  input[type="submit"] {
    margin-top: 10px;
    cursor: pointer;
    font-size: 15px;
    background: #01d28e;
    border: 1px solid #01d28e;
    color: #fff;
    padding: 10px 20px;
  }
  
  input[type="submit"]:hover {
    background: #6cf0c2;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
  }
  
  .login-form {
    background-color: white;
    padding: 2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  
  .list-container {
    display: flex;
    margin-top: 5em ;
  }
  
  .error {
    color: red;
    font-size: 12px;
  }
  
  .title {
    font-size: 25px;
    margin-bottom: 20px;
  }
  
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 10px;
  }
  .nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 10px; 
    text-decoration: none;
    background: #6cf0c2;
  }
  `