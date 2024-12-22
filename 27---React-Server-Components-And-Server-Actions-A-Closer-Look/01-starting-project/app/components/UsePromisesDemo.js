import fs from "node:fs/promises";

export default async function UsePromiseDemo() {
  const data = await fs.readFile("dummy-db.json", "utf-8");
  const users = JSON.parse(data);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  
  return (<div className="rsc">
    <h2>RSC with Data Fetching</h2>
    <p>
      Uses <strong>await / async</strong> for data fetching
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