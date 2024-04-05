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
    // Children is used to nest others pages to a parent page
    // All the children pages are gonna be relative to the Parent  pages
    children:[
      {
        // The index makes the particular page shows up at the root domain
        // Landing page in this case will be the defualt page to show at the root domain 
       index:true,
        element: <Landing />,
      },
      {
        path: "newsletter",
        element: <Newsletter/>,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "about",
        element: <About />,
      },

    ]
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
