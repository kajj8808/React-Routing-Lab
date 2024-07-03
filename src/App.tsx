import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BookAuthor from "./pages/Book/Author";
import BookDetail from "./pages/Book/Detail";
import BookChapters from "./pages/Book/Chapters";
import BookCharacters from "./pages/Book/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "author/:name",
        children: [
          {
            path: "",
            element: <BookAuthor />,
            children: [
              {
                path: ":book",
                element: <BookDetail />,
                children: [
                  {
                    path: "chapters",
                    element: <BookChapters />,
                  },
                  {
                    path: "characters",
                    element: <BookCharacters />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
