import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import Placeholder from 'react-bootstrap/Placeholder';

export default function NavBar({ user, logoutHandler }) {
    const location = useLocation();
    return (
    <>
    {[false].map((expand) => (
    <Navbar key={expand} expand={expand} className="mb-3">
        <Container fluid>
            <Navbar.Brand>{user ? `${user.name}` : 'Guest'}</Navbar.Brand>
            <Nav.Link as={Link} to="/">Главная</Nav.Link>
            {
            user ? (
            <>
            <Nav.Link as={Link} to="/new-candidate">Добавить кандидата</Nav.Link>
            <Nav.Link as={Link} onClick={logoutHandler} className="border border-dark rounded-3 px-2 py-1">Выйти</Nav.Link>
            </>
            ) : (
            <Nav.Link as={Link} to="/login" className="border border-dark rounded-3 px-2 py-1">Войти</Nav.Link>
        )
        }
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
        >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Этапы собеседования
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link as={Link} to="/new"  className={location.pathname === '/' ? 'text-dark fw-bold' : 'text-dark'}>Новые</Nav.Link>
                      <Nav.Link as={Link} to="/">Письмо-приглашение</Nav.Link>
                      <Nav.Link as={Link} to="/">Звонок-скрининг</Nav.Link>
                      <Nav.Link as={Link} to="/">Видеоинтервью</Nav.Link>
                      <Nav.Link as={Link} to="/">Передано заказчику</Nav.Link>
                      <Nav.Link as={Link} to="/">Интервью с заказчиком</Nav.Link>
                      <Nav.Link as={Link} to="/">Выставлен оффер</Nav.Link>
                      <Nav.Link as={Link} to="/">Вышел на работу</Nav.Link>
                      <Nav.Link as={Link} to="/">Отказ</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
    );
}
