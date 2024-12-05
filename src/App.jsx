import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
  SingleErrorPage,
} from "./pages"

import { loader as landingLoader } from "./pages/Landing"
// Importing Cocktial Loader into App
import { loader as singleCocktailLoader } from "./pages/Cocktail"
// importing newsletter action
import { action as newsletterAction } from "./pages/Newsletter"

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
        action: newsletterAction,
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
])

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // This is setting how long the query is going to last for\
      // This is 1secs X 60 = 1 min (1*5 = 5min)
      // The valid time for query is set to 5 min
      staleTime: 1000 * 60 * 5,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
