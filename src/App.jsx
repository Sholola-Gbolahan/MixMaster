import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SingleErrorPage,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
// Importing Cocktial Loader into App
import { loader as singleCocktailLoader } from "./pages/Cocktail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    // Children is used to nest others pages to a parent page
    // All the children pages are gonna be relative to the Parent  pages
    children: [
      {
        // The index makes the particular page shows up at the root domain
        // Landing page in this case will be the defualt page to show at the root domain
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SingleErrorPage />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        // This direct the pages to their various ID's page
        path: "cocktail/:id",
        errorElement: <SingleErrorPage />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },

      //  You can next as deep
      // In this case I nested more pages/ element in my about page
      {
        path: "about",
        element: <About />,
        children: [
          {
            index: true,
            element: <h2>Our Company</h2>,
          },
          {
            path: "person",
            element: <h2>Samson Sholola</h2>,
          },
        ],
      },
    ],
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
