import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import logo from '../album-icon.png';

export const loader = async () => {
  const albums = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((response) => response.json());
  return { albums };
};

function Albums() {
  const { albums } = useLoaderData();
  return (
    <div>
      <h1>&nbsp;</h1>
      {albums.map((album) => (
        <Link key={album.id} to={`/albums/${album.id}`}>
            <img src={logo}/>
          <span>{album.title}</span>
        </Link>
      ))}
    </div>
  );
}

export default Albums;
