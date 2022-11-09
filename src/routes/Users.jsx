import React from "react";
import { useLoaderData, Link } from "react-router-dom";

export const loader = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  return { users };
};

function Users() {
  const { users } = useLoaderData();
  return (
    <div>
      <h1>&nbsp;</h1>
      {users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <div>{user.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default Users;
