import React from 'react'
import MainPage from "./components/pages/MainPage"
import Layout from './Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewCandidate from './components/pages/NewCandidate';
import { useState, useEffect } from 'react';
import axiosInstance, { setAccessToken} from '../src/axiosInstance';
import ProtectedRoute from './components/hoc/ProtectedRoute';
import LoginPage from './components/pages/LoginPage';
import Loader from './components/hoc/Loader';
import NewCandidatePage from './components/pages/NewCandidatePage'
import InvitationPage from './components/pages/ InvitationPage';
import CallPage from './components/pages/CallPage';
import VideoInteriew from './components/pages/VideoInterviewPage'
import TransferredPage from './components/pages/TransferredPage'
import InterviewPage from './components/pages/InterviewPage'
import OfferPage from './components/pages/OfferPage'
import JobPage from './components/pages/JobPage'
import RefusalPage from './components/pages/RefusalPage'


function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    axiosInstance('/tokens/refresh').then((res) => {
      const { user: newUser, accessToken } = res.data;
      setUser(newUser);
      setAccessToken(accessToken);
    }).catch(() => {
      setUser(null);
    });
  }, []);

  const loginHandler = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    const res = await axiosInstance.post('/auth/login', formData);
    const { data } = res;
    setUser(data.user);
    setAccessToken(data.accessToken);
  };

  const logoutHandler = async () => {
    await axiosInstance('/auth/logout');
    setUser(null);
    setAccessToken('');
  };

  const routers = ([
    {
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: "/",
          element: <MainPage />
        },
        {
          path: "/new",
          element: <NewCandidatePage />
        },
        {
          path: "/invitation",
          element: <InvitationPage />
        },
        {
          path: "/call",
          element: <CallPage />
        },
        {
          path: "/video-interview",
          element: <VideoInteriew />
        },
        {
          path: "/transferred",
          element: <TransferredPage />
        },
        {
          path: "/interview",
          element: <InterviewPage />
        },
        {
          path: "/offer",
          element: <OfferPage />
        },
        {
          path: "/job",
          element: <JobPage />
        },
        {
          path: "/refusal",
          element: <RefusalPage />
        },
        {
          path: "/new-candidate",
          element: <NewCandidate />
        },
        {
          element: <ProtectedRoute isAllowed={!user} />,
          children: [
            {
              path: '/login',
              element: <LoginPage loginHandler={loginHandler} />,
            },
          ],
        },
      ]      
    },
])
const router = createBrowserRouter(routers)
return <Loader isLoading={user === undefined}><RouterProvider router={router} /></Loader>;
}

export default App;
