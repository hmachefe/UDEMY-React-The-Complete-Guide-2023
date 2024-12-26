import fs from "node:fs/promises";
import { Suspense } from "react";
import UsePromiseDemo from "./components/UsePromisesDemo";
import ErrorBoundary from "./components/ErrorBoundary"; // Import fixed ErrorBoundary

export default async function Home() {
  const fetchUsersPromise = new Promise((resolve, reject) => 
    setTimeout(() => {
      reject(new Error("Artificial Error for Testing!")); // Artificial error
    }, 3000)
  );

  return (
    <main>
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
      { /* <DataFetchingDemo /> */}
      { /* <ServerActionsDemo />*/ }
      <ErrorBoundary fallback={<p>Something went wrong !</p>}>
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo usersPromise={fetchUsersPromise}/>
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}
