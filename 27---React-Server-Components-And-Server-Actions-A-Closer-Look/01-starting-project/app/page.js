// import RSCDemo from "@/components/RSCDemo";
// import ClientDemo from "./components/ClientDemo";
// import DataFetchingDemo from "./components/DataFetchingDemo";
// import ServerActionsDemo from "./components/ServerActionDemo";
import UsePromiseDemo from "./components/UsePromisesDemo";
import fs from "node:fs/promises";

export default async function Home() {

  const data = await fs.readFile("dummy-db.json", "utf-8");
  const users = JSON.parse(data);
  console.log(users);

  return (
    <main>
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
      { /* <DataFetchingDemo /> */}
      { /* <ServerActionsDemo />*/ }
      <UsePromiseDemo users={users}/>
    </main>
  );
}
