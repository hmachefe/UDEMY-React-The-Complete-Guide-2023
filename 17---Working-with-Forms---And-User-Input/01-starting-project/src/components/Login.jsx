import { useState } from "react";

export default function Login() {

  // const [enteredEmail, setEnderedEmail] = useState('');
  // const [enteredPassword, setEnteredPassword] = useState('');

  const [enteredValues, setEnteredValues] = useState({
    email: '',
    password: ''
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log('User email == ', enteredValues);
  }

  // function handleEmailChange(event) {
  //   setEnderedEmail(event.target.value);
  // }

function handleValuesChange(identifier, value) { 
  setEnteredValues(prevState => {
    return {
      ...prevState,
      [identifier]: value
    }
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
              onChange={(event) => handleValuesChange('email', event.target.value)}
              value={enteredValues.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input 
            id="password" 
            type="button" 
            name="password"
            onChange={(event) => handleValuesChange('password', event.target.value)}
            value={enteredValues.password}            
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
