import React from "react";
import { NavLink } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notFound">
      <h1>404</h1>
      <h1>Page not found</h1>
      <NavLink to="/albums" end={true} className="albumsLink">
        Albums
      </NavLink>
    </div>
  );
}

export default NotFound;
