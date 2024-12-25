"use client"; 
import { use } from "react";
import { useState } from "react";

export default function UsePromiseDemo({ usersPromise }) {

  const users = use(usersPromise);
  const [counter, setCounter] = useState(0);

  return (<div className="rsc">
    <h2>RSC with Data Fetching</h2>
    <p>
      Uses <strong>await / async</strong> for data fetching
    </p>
    <p>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        Increment
      </button>
      <span>{counter}</span>
    </p>
    <ul>
      {users.map(user => {
        return <li key={user.id}>
          {user.name} {user.name}
        </li>
      })} 
    </ul>
  </div>);
}