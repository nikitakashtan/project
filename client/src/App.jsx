import React from 'react'
import MainPage from "./components/pages/MainPage"
import Layout from './Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewCandidate from './components/pages/NewCandidate';
function App() {
 


  const routers = ([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />
        },
        {
          path: "/new-candidate",
          element: <NewCandidate />
        }
        // {
        //   element: <ProtectedRoute isAllowed={!user} />,
        //   children: [
        //     {
        //       path: '/signup',
        //       element: <SignupPage signupHandler={signupHandler} />,
        //     },
        //   ]
        // },
     
      ]      
    },
])
const router = createBrowserRouter(routers)
return (<RouterProvider router={router} />)
}

export default App;
