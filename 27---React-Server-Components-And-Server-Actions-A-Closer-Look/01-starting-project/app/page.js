// import RSCDemo from "@/components/RSCDemo";
// import ClientDemo from "./components/ClientDemo";
// import DataFetchingDemo from "./components/DataFetchingDemo";
// import ServerActionsDemo from "./components/ServerActionDemo";
import fs from "node:fs/promises";
import { Suspense } from "react";
import UsePromiseDemo from "./components/UsePromisesDemo";

export default async function Home() {

  const fetchUsersPromise = new Promise((resolve) => setTimeout(async () => {
    const data = await fs.readFile("dummy-db.json", "utf-8");
    const users = JSON.parse(data);  
    resolve(users)
  }, 3000));

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
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo usersPromise={fetchUsersPromise}/>
      </Suspense>
    </main>
  );
}
