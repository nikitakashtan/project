import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navbar from './ui/Navbar';

export default function Layout() {
  return (
    <Container>
          <Navbar />
       
            <Outlet />
    
    </Container>
  );
}
