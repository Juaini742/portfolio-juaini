import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainHome from "./components/molecules/home/main";
import MainProfile from "./components/molecules/profile/main";
import { MainService } from "./components/molecules/service";
import { MainResume } from "./components/molecules/resume";
import GalleryEmpty from "./components/molecules/gallery/empty";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome />,
    },
    {
      path: "/service",
      element: <MainService />,
    },
    {
      path: "/resume",
      element: <MainResume />,
    },
    {
      path: "/gallery",
      element: <GalleryEmpty />,
    },
    {
      path: "/profile",
      element: <MainProfile />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
