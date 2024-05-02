import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import axiosInstance from '../../axiosInstance';

export default function NavBar({ user, logoutHandler }) {
    const location = useLocation();
    const [candidates, setCandidates] = useState([]);
  
  useEffect(() => {
    axiosInstance('/candidates').then((res) => {
      setCandidates(res.data);
    });
  }, []);
  const stage1 = candidates.filter((candidate) => candidate.Stage.name === 'Новые').length;
  // const a = candidates.filter((candidate) => candidate.length);
  const stage2 = candidates.filter((candidate) => candidate.Stage.name === 'Отправлено письмо-приглашение').length;
  const stage3 = candidates.filter((candidate) => candidate.Stage.name === 'Назначен звонок-скрининг').length;
  const stage4 = candidates.filter((candidate) => candidate.Stage.name === 'Назначено видеоинтервью').length;
  const stage5 = candidates.filter((candidate) => candidate.Stage.name === 'Передано заказчику').length;
  const stage6 = candidates.filter((candidate) => candidate.Stage.name === 'Назначено интервью с заказчиком').length;
  const stage7 = candidates.filter((candidate) => candidate.Stage.name === 'Выставлен оффер').length;
  const stage8 = candidates.filter((candidate) => candidate.Stage.name === 'Принял оффер и вышел на работу').length;
  const stage9 = candidates.filter((candidate) => candidate.Stage.name === 'Отказ').length;
  // const newC = candidates.filter((candidate) => candidate.Stage.name === 'Новые').length;
  // const newC = candidates.filter((candidate) => candidate.Stage.name === 'Новые').length;
  
    return (
    <>
    {[false].map((expand) => (
    <Navbar key={expand} expand={expand} className="mb-3" data-bs-theme="dark" style={{backgroundColor: 'rgba(0, 0, 0, 0.79)'}}>
        <Container fluid>
            <Navbar.Brand>{user ? `${user.name}` : 'Guest'}</Navbar.Brand>
            <Nav.Link className='text-white' as={Link} to="/">
              Все кандидаты
             
              </Nav.Link>
            {
            user ? (
            <>
            <Nav.Link className='text-white' as={Link} to="/new-candidate">Добавить кандидата</Nav.Link>
            <Nav.Link as={Link} onClick={logoutHandler} className="border border-wite rounded-3 px-2 py-1 text-white">Выйти</Nav.Link>
            </>
            ) : (
            <Nav.Link as={Link} to="/login" className="border border-wite rounded-3 px-2 py-1 text-white">Войти</Nav.Link>
        )
        }
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
         style={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
        >
            <Offcanvas.Header closeButton >
                <Offcanvas.Title style={{color: 'white'}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Этапы собеседования
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/new" className={location.pathname === '/' ? 'text-white' : 'text-white fw-bold'}>
                    Новые
                    <Badge bg="secondary">{stage1}</Badge>
                    </Nav.Link>
                      <Nav.Link as={Link} to="/invitation" className={location.pathname === '/' ? 'text-white' : 'text-white fw-bold'}>
                        Письмо-приглашение
                        <Badge bg="secondary">{stage2}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/call" className={location.pathname === '/' ? 'text-white' : 'text-white fw-bold'}>
                        Звонок-скрининг
                        <Badge bg="secondary">{stage3}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/video-interview" className={location.pathname === '/' ? 'text-white' : 'text-white fw-bold'}>
                        Видеоинтервью
                        <Badge bg="secondary">{stage4}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/transferred" className={location.pathname === '/' ? 'text-white' : 'text-white fw-bold'}>
                        Передано заказчику
                        <Badge bg="secondary">{stage5}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/interview" className={location.pathname === '/' ? 'text-white' : 'text-white fw-bold'}>
                        Интервью с заказчиком
                        <Badge bg="secondary">{stage6}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/offer" className={location.pathname === '/' ? 'text-white' : 'text-white fw-bold'}>
                        Выставлен оффер
                        <Badge bg="secondary">{stage7}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/job" className={location.pathname === '/' ? 'text-white' : 'text-white fw-bold'}>
                        Вышел на работу
                        <Badge bg="secondary">{stage8}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/refusal" className={location.pathname === '/' ? 'text-white' : 'text-white fw-bold'}>
                        Отказ
                        <Badge bg="secondary">{stage9}</Badge>
                        </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
    );
}
