import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="all">
      <header>
        <NavLink
          to="/albums"
          end={true}
          className={({ isActive }) =>
            isActive ? "navLink_active" : "navLink"
          }
        >
          Albums
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "navLink_active" : "navLink"
          }
        >
          Users
        </NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <hr />
        <div className="textBlock">
          <h1>Created by Matvey Titov</h1>
          <h1>BSU: 2022</h1>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
