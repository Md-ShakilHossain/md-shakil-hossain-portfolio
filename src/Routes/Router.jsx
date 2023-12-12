import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
import Contact from "../Pages/Contact/Contact";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/projects",
          element: <Projects></Projects>
        },
        {
          path: "/skills",
          element: <Skills></Skills>
        },
        {
          path: "/education",
          element: <Education></Education>
        },
        {
          path: "/experience",
          element: <Experience></Experience>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        }
      ]
    },
  ]);