import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";
import DestinationPage from "./features/destination/DestinationPage";
import CrewPage from "./features/crew/CrewPage";
import TechnologyPage from "./features/technology/TechnologyPage";
import HomePage from "./features/home/Fix";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/destination",
          element: <DestinationPage />,
        },
        {
          path: "/crew",
          element: <CrewPage />,
        },
        {
          path: "/technology",
          element: <TechnologyPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
