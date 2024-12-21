import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import Dashboard from "./pages/Dashboard"
import User from "./pages/User"
import LoginPage from "./pages/Login"

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[{
        path:"/",
        element:<Dashboard/>,
      },
      {
        path:"/users",
        element:<User/>
      }
    ]
    },
    {
      path:"/login",
      element:<LoginPage/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
