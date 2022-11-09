import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <h1>Page not found</h1>
      <NavLink to="/albums" end={true}>
        Albums &nbsp; &nbsp;
      </NavLink>
    </div>
  );
}

export default NotFound;
