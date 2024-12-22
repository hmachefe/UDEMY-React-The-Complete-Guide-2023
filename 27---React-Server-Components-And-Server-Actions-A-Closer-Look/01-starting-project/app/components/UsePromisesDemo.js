export default async function UsePromiseDemo({users}) {
  console.log('UsePromiseDemo   users == ', users);
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