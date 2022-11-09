import React, { Suspense } from "react";
import { useParams, useLoaderData, Await, Link } from "react-router-dom";
import logo from "../album-icon.png";
import "./User.css";

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
              <div className="userName">{user.name}</div>
              <div className="userInf">Username: {user.username}</div>
              <div className="userInf">email: {user.email}</div>
              <div className="userInf">Phone: {user.phone}</div>
              <div className="userInf">Site: {user.website}</div>

              <h1 className="albumsTitle">Albums:</h1>
            </div>
          );
        }}
      </Await>
      <Await resolve={albumsPromise}>
        {(albums) =>
          albums.map((album) =>
            album.userId == id ? (
              <Link key={album.id} to={`/albums/${album.id}`}>
                <div className="albumDiv">
                  <img src={logo} className="albumIcon" />
                  <span>{album.title}</span>
                </div>
              </Link>
            ) : null
          )
        }
      </Await>
    </Suspense>
  );
}

export default Users;
