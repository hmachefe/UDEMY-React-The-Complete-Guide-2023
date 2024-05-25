
import { useState } from "react";

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
            <div className="control no-margin">
              <label htmlFor="email">Email</label>
              <input 
                  id="email" 
                  type="email" 
                  name="email" 
                  onBlur={() => handleInputBlur('email')}
                  onChange={(event) => handleInputChange('email', event.target.value)}
                  value = {enteredValues.email}
              />
              <div className="control-error">{emailIsIvalid && <p> Please enter a valid user email address</p>}</div>
            </div>
    
            <div className="control no-margin">
              <label htmlFor="password">Password</label>
              <input 
                id="password" 
                type="button" 
                name="password"
                onChange={(event) => handleInputChange('password', event.target.value)}
                value = {enteredValues.email}
              />
            </div>
          </div>
    
          <p className="form-actions">
            <button className="button button-flat">Reset</button>
            <button className="button" type="submit">Login</button>
          </p>
        </form>
      );
}

