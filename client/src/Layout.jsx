import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavBar from './components/ui/NavBar'

export default function Layout({ user, logoutHandler, needUpdate, setNeedUpdate }) {
  return (
    <Container>
          <NavBar user={user} logoutHandler={logoutHandler} needUpdate={needUpdate} setNeedUpdate={setNeedUpdate}/>
            <Outlet />
    </Container>
  );
}
