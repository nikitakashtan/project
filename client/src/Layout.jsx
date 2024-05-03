import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavBar from './components/ui/NavBar'

export default function Layout({ user, logoutHandler }) {
  return (
    <Container>
          <NavBar user={user} logoutHandler={logoutHandler}/>
            <Outlet />
    </Container>
    
  );
}
