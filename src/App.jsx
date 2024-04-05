import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },

  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return (
    <div>
    
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
