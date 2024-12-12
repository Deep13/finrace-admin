import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Dashboard from "./pages/Dashboard"

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[{
        path:"/",
        element:<Dashboard/>
      }]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
