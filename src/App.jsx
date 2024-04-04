import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <h1> Homepage</h1>
},

{
  path: '/about',
  element: <h1> about Page</h1>
}
])

const App = () => {
  return (
    <div> <RouterProvider router={router} /> </div>
  )
}

export default App