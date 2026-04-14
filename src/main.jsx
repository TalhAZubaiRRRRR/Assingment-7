import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'

import Root from './layout/Root.jsx'
import Friends from './pages/Fridends/Friends.jsx'
import FriendDetails from './pages/FriendDetails/FriendDetails.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import FriendsTimeLine from './pages/FrinedsTimeLine/FriendsTimeLine.jsx'




const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    children:[
      {
        path:"/Friends",
        element:<Friends/>
      },
      {
        path:"/FriendDetails",
        element:<FriendDetails></FriendDetails>
      },
      {
        path:'/timeline',
        element:<FriendsTimeLine/>
      }

    ],
    errorElement:<NotFound/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
