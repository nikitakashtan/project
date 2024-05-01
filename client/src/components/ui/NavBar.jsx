import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavBar() {
    return (
        <>
          {[false].map((expand) => (
            <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
              <Container fluid>
                <Navbar.Brand>HH</Navbar.Brand>
                <Nav.Link to="/">Добавить кандидата</Nav.Link>
                <Nav.Link to="/">Войти</Nav.Link>
                <Nav.Link to="/">Выйти</Nav.Link>
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
                      <Nav.Link to="/">Новые</Nav.Link>
                      <Nav.Link to="/">Письмо-приглашение</Nav.Link>
                      <Nav.Link to="/">Звонок-скрининг</Nav.Link>
                      <Nav.Link to="/">Видеоинтервью</Nav.Link>
                      <Nav.Link to="/">Передано заказчику</Nav.Link>
                      <Nav.Link to="/">Интервью с заказчиком</Nav.Link>
                      <Nav.Link to="/">Выставлен оффер</Nav.Link>
                      <Nav.Link to="/">Вышел на работу</Nav.Link>
                      <Nav.Link to="/">Отказ</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
      );
    }
    