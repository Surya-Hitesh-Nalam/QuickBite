import Login from './auth/login'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signup from './auth/Signup'
import ForgotPassword from './auth/ForgotPassword'
import ResetPassword from './auth/ResetPassword'
import VerifyEmail from './auth/VerifyEmail'
import Hero from './components/Hero'
import MainLayout from './layout/MainLayout'
import Profile from './components/Profile'
import SearchPage from './components/SearchPage'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<Hero/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/seach/:id",
        element:<SearchPage/>
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/forgot-password",
    element:<ForgotPassword/>
  },
  {
    path:"/reset-password",
    element:<ResetPassword/>
  },
  {
    path:"/verify-email",
    element:<VerifyEmail/>
  },
])

function App() {

  return (
    <main>
      <RouterProvider router={appRouter}>
        
      </RouterProvider>
    </main>
  )
}

export default App