// import RSCDemo from "@/components/RSCDemo";
// import ClientDemo from "./components/ClientDemo";
// import DataFetchingDemo from "./components/DataFetchingDemo";
// import ServerActionsDemo from "./components/ServerActionDemo";
import fs from "node:fs/promises";
import { Suspense } from "react";
import UsePromiseDemo from "./components/UsePromisesDemo";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export default async function Home() {

const fetchUsersPromise = new Promise((resolve, reject) => 
  setTimeout(async () => {
    // resolve(users)
    reject(new Error("Error !")); // for testing purpose
  }, 3000)
);

  // const data = await fs.readFile("dummy-db.json", "utf-8");
  // const users = JSON.parse(data);
  // await new Promise((resolve) => setTimeout(resolve, 3000));

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
