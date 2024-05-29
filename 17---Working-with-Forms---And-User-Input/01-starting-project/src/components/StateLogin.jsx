
import { useState } from "react";
import Input from "./Input";

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    const[didEdit, setDidEdit] = useState({
        email: false,
        password: false   
    });

    const emailIsIvalid = 
      didEdit.email && enteredValues.email !== '' && !enteredValues.email.includes('@');
  
    const passwordIsIvalid = 
      didEdit.password && enteredValues.password !== '' && enteredValues.password.trim().length < 6;

    function handleSubmit(event) {
        event.preventDefault();
        console.log(enteredValues);
    }

    function handleInputChange(indentifier, value) {
        setEnteredValues(prevState => {
            return {
                ...prevState, 
                [indentifier]: value
            }; 
        });
        setDidEdit(prevEdit => {
            return {
                ...prevEdit, 
                [indentifier]: false
            };
        })
    }

    function handleInputBlur(identifier) {
        setDidEdit(prevEdit => {
            return {
                ...prevEdit, 
                [identifier]: true
            }; 
        })
    }

    return (
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
    
          <div className="control-row">
            <Input 
              label="Email" 
              id="email" 
              type="email" 
              name="email"
              onBlur={() => handleInputBlur('email')}
              onChange={(event) => handleInputChange('email', event.target.value)}
              value = {enteredValues.email}
              error={emailIsIvalid && 'Please enter a valid email !'}
            />

            <Input  
              label="Password"
              id="password"
              type="password"
              name="password"
              onBlur={() => handleInputBlur('password')}
              onChange={(event) => handleInputChange('password', event.target.value)}
              value = {enteredValues.password}
              error={passwordIsIvalid && 'Please enter a valid password !'}              
            />
          </div>
    
          <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button" type="submit">Login</button>
          </p>
        </form>
      );
}

