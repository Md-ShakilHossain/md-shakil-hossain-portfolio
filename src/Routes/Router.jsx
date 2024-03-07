import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Skills from "../Pages/Skills/Skills";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
import Contact from "../Pages/Contact/Contact";
import DreamJobs from "../Components/DreamJobs/DreamJobs";
import ShakilTech from "../Components/ShakilTech/ShakilTech";
import EventManagement from "../Components/EventManagement/EventManagement";
import GroupProject from "../Pages/GroupProject/GroupProject";
import InnovateEd from "../Components/InnovateEd/InnovateEd";


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
          path: "/group-projects",
          element: <GroupProject></GroupProject>
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
        },
        {
          path: "/dreamJob",
          element: <DreamJobs></DreamJobs>
        },
        {
          path: "/innovateEd",
          element: <InnovateEd></InnovateEd>
        },
        {
          path: "/shakilTech",
          element: <ShakilTech></ShakilTech>
        },
        {
          path: "/eventManagement",
          element: <EventManagement></EventManagement>
        }
      ]
    },
  ]);