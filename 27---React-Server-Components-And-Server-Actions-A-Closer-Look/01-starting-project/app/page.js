// import RSCDemo from "@/components/RSCDemo";
// import ClientDemo from "./components/ClientDemo";
// import DataFetchingDemo from "./components/DataFetchingDemo";
// import ServerActionsDemo from "./components/ServerActionDemo";
import { Suspense } from "react";
import UsePromiseDemo from "./components/UsePromisesDemo";

export default async function Home() {

  return (
    <main>
      {/* <ClientDemo>
        <RSCDemo />
      </ClientDemo> */}
      { /* <DataFetchingDemo /> */}
      { /* <ServerActionsDemo />*/ }
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo />
      </Suspense>
    </main>
  );
}
