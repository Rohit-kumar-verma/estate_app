
import HomePage from './routes/HomePage/HomePage'
import SinglePage from './routes/SinglePage/SinglePage'
import ListPage from './routes/ListPage/listPage'
import ProfilePage from './routes/ProfilePage/ProfilePage'
import Register from './routes/Register/Register'
import Login from './routes/Login/Login'
import ProfileUpdatePage from './routes/ProfileUpdatePage/ProfileUpdatePage'
import { RequieredLayout,Layout } from './routes/layout/layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

  const router=createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>,
        },
        {
          path:'/:id',
          element: <SinglePage/>,
        },
        {
          path:'/list-page',
          element:<ListPage/>,
        },
        {
          path:'/register',
          element: <Register/>,
        },
        {
          path:'/login',
          element: <Login/>,
        }        
      ]
    },
    {
      path:'/',
      element: <RequieredLayout/>,
      children:[
        {
          path:'/profile',
          element: <ProfilePage/>,
        },
        {
          path:'/profile/update',
          element: <ProfileUpdatePage/>,
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
