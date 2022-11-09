import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <NavLink to="/albums" end={true}>
          Albums &nbsp; &nbsp;
        </NavLink>
        <NavLink to="/users">Users</NavLink>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h1>&nbsp;</h1>
        <h1>Created by Matvey Titov</h1>
      </footer>
    </div>
  );
}

export default Layout;
