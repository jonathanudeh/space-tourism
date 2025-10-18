import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import ErrorPage from "./ui/ErrorPage";
import HomePage from "./features/home/HomePage";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
