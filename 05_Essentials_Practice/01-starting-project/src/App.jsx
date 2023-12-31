import Header from './components/Header.jsx'
import Results from './components/Results.jsx';
import UserInput from './components/UserInput.jsx'
import { useState } from 'react';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleUserInputChange(userInputIdentifier, newValue) {
      setUserInput({
          ...userInput,
          [userInputIdentifier]: +newValue
      });
  }

  const isInputValid = userInput.duration > 1;

  return (
    <>
        <Header/>
          <UserInput userInput={userInput} onChange={handleUserInputChange}/>
          {!isInputValid  &&  <p>Please enter a valid input</p>}
          {isInputValid   &&  <Results input={userInput}/>}

        
    </>
  )
}

export default App
