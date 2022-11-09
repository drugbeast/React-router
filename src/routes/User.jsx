import React, { Suspense } from "react";
import { useParams, useLoaderData, Await, Link } from "react-router-dom";
import logo from '../album-icon.png';

export const loader = ({ params: { id } }) => {
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((response) => response.json());
  const albumsPromise = fetch(
    `https://jsonplaceholder.typicode.com/albums`
  ).then((response) => response.json());
  return { userPromise, albumsPromise };
};

function Users() {
  const { id } = useParams();
  const { userPromise, albumsPromise } = useLoaderData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={userPromise} errorElement={<div>Oops!</div>}>
        {(user) => {
          return (
            <div>
              <h1>&nbsp;</h1>
              <div>{user.name}</div>
              <h1>&nbsp;</h1>
              <div>Username: {user.username}</div>
              <div>email: {user.email}</div>
              <div>Phone: {user.phone}</div>
              <div>Site: {user.website}</div>

              <h1>&nbsp;</h1>
              <h1>Albums:</h1>
              <h1>&nbsp;</h1>
            </div>
          );
        }}
      </Await>
      <Await resolve={albumsPromise}>
        {(albums) =>
          albums.map((album) =>
            album.userId == id ? (
              <Link key={album.id} to={`/albums/${album.id}`}>
                <img src={logo} />
                <div>{album.title}</div>
              </Link>
            ) : null
          )
        }
      </Await>
    </Suspense>
  );
}

export default Users;
