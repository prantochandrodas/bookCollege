import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main/Main';
import Home from './pages/Home/Home';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import AuthProvider from './pages/Contexts/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import UserProfile from './pages/UserProfile/UserProfile';
import AllColleges from './pages/AllColleges/AllColleges';
import CollegeDetails from './pages/CollegeDetails/CollegeDetails';

// Create a client
const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path:'/allColleges',
        element:<AllColleges/>
      },
      {
        path:'/user/:email',
        element:<UserProfile></UserProfile>,
        loader:({params})=>fetch(`http://localhost:5000/user/${params.email}`)
      },
      {
        path:'/college/:id',
        element:<CollegeDetails/>,
        loader:({params})=>fetch(`http://localhost:5000/collegeDetails/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
