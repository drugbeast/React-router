import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users, { loader as usersLoader } from "./routes/Users";
import Layout from "./routes/Layout";
import Albums, { loader as albumsLoader } from "./routes/Albums";
import User, { loader as userLoader } from "./routes/User";
import Album, { loader as albumLoader } from "./routes/Album";
import NotFound from "./routes/NotFound";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/albums",
          loader: albumsLoader,
          element: <Albums />,
        },
        {
          path: "/users",
          loader: usersLoader,
          element: <Users />,
        },
        {
          path: `/users/:id`,
          loader: userLoader,
          element: <User />,
        },
        {
          path: `/albums/:id`,
          loader: albumLoader,
          element: <Album />,
        },
        {
          path: `/*`,
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
