import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Button } from './components/ui/button'
import Applayout from './layout/Applayout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import Joblisting from './pages/Joblisting'
import Job from './pages/Job'
import Postjob from './pages/Postjob'
import Savedjobs from './pages/Savedjobs'
import Myjobs from './pages/Myjobs'
import { Themeprovider } from "@/components/Themeprovider"
import ProtectedRoute from './components/ProtectedRoute'
import "./App.css";

const router = createBrowserRouter([
  {
    element:<Applayout/>,
    children:[
      {
        path:'/',
        element:<LandingPage/>,
      },
      {
        path:'/Onboarding',

        element:(
        <ProtectedRoute>
        <Onboarding/>
        </ProtectedRoute>
       ),
      },
      {
        path:'/Jobs',
        element:(
        <ProtectedRoute>
        <Joblisting/>
        </ProtectedRoute>
        ),
      },
     
      {
        path:'/job/:id',
        element:(

        <ProtectedRoute>
        <Job/>
        </ProtectedRoute>
        ),
      },
      { 
        path:'/postjob',
        element:(

        <ProtectedRoute>
        <Postjob/>
        </ProtectedRoute>
        ),
        
      },
      {
        path:'/Savedjobs',
        element:
        (
        <ProtectedRoute>
        <Savedjobs/>
        </ProtectedRoute>
        )
      }, 
       {
        path:'/myjobs',
        element:(
        <ProtectedRoute>
        <Myjobs/>
        </ProtectedRoute>
        ),
      },
    ] 

  }
])

const App = () => {
  return (
    <Themeprovider defaultTheme="dark" storageKey="vite-ui-theme">
  
  <RouterProvider router={router}/>
  </Themeprovider>


  )
}

export default App