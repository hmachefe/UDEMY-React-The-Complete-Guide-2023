'use client';

import { useState } from 'react';

export default function ClientDemo({ children }) {
  const [count, setCount] = useState(0); // <- this is why it's a client component

  console.log('ClientDemo rendered');
  return (
    <div className="client-cmp">
      <h2>A React Client Component</h2>
      <p>
        Will be rendered on the client <strong>AND</strong> the server.
      </p>
      <p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        <span>{count}</span>
      </p>
      {children}
    </div>
  );
}