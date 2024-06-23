import { createBrowserRouter } from "react-router-dom";
import App from "./src/App";
import Store from "./src/Components/Store/Store";
import AboutUs from "./src/Components/About/AboutUs";
import ErrorComponent from "./src/Components/ErrorComponent/ErrorComponent";
import Body from "./src/Components/Home/Body";
import Login from "./src/Components/Login";
import Signup from "./src/Components/Signup";
import { LoginModal } from "./src/Components/Modals/Login";
import SellAlbum from "./src/Components/SellAlbums/SellAlbum";
import OrganiseEvent from "./src/Components/Events/OrganiseEvent";
import Classics from "./src/Components/CategoryPages/Classics";
import Melodic from "./src/Components/CategoryPages/Melodic";
import Pop from "./src/Components/CategoryPages/Pop";
import Rap from "./src/Components/CategoryPages/Rap";
import Rock from "./src/Components/CategoryPages/Rock";
import Enquiry from "./src/Components/Events/Enquiry";





const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/store",
        element: <Store />,
        children: [
          {
            path: "/store/classics",
            element: <Classics />,
          },
          {
            path: "/store/melodic",
            element: <Melodic />,
          },
          {
            path: "/store/pop",
            element: <Pop />,
          },
          {
            path: "/store/rap",
            element: <Rap/>,
          },
          {
            path: "/store/rock",
            element: <Rock />,
          },
        ],
      },
      {
        path: "/about",
        element: <AboutUs />,
      },

      {
        path: "/sellalbum",
        element: <SellAlbum />,
      },
      {
        path: "/enquiry",
        element: <Enquiry />,
      },
      {
        path: "/organiseevent",
        element: <OrganiseEvent />,
      },
    ],
    errorElement: <ErrorComponent />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default AppRouter;
