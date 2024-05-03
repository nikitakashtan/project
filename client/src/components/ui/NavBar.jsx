import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import axiosInstance from '../../axiosInstance';
import '../../../src/style.css';

export default function NavBar({ user, logoutHandler }) {
  const location = useLocation();
  const [candidates, setCandidates] = useState([]);
  const [candidateCounts, setCandidateCounts] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axiosInstance('/candidates').then((res) => {
      setCandidates(res.data);
      updateCandidateCounts(res.data);
    });
  };

  const updateCandidateCounts = (candidates) => {
    const counts = {
      stage1: candidates.filter((candidate) => candidate.Stage.name === 'Новые').length,
      stage2: candidates.filter((candidate) => candidate.Stage.name === 'Отправлено письмо-приглашение').length,
      stage3: candidates.filter((candidate) => candidate.Stage.name === 'Назначен звонок-скрининг').length,
      stage4: candidates.filter((candidate) => candidate.Stage.name === 'Назначено видеоинтервью').length,
      stage5: candidates.filter((candidate) => candidate.Stage.name === 'Передано заказчику').length,
      stage6: candidates.filter((candidate) => candidate.Stage.name === 'Назначено интервью с заказчиком').length,
      stage7: candidates.filter((candidate) => candidate.Stage.name === 'Выставлен оффер').length,
      stage8: candidates.filter((candidate) => candidate.Stage.name === 'Принял оффер и вышел на работу').length,
      stage9: candidates.filter((candidate) => candidate.Stage.name === 'Отказ').length,
    };
    setCandidateCounts(counts);
  };
  // const stage1 = candidates.filter((candidate) => candidate.Stage.name === 'Новые').length;
  // const a = candidates.length;
  // const stage2 = candidates.filter((candidate) => candidate.Stage.name === 'Отправлено письмо-приглашение').length;
  // const stage3 = candidates.filter((candidate) => candidate.Stage.name === 'Назначен звонок-скрининг').length;
  // const stage4 = candidates.filter((candidate) => candidate.Stage.name === 'Назначено видеоинтервью').length;
  // const stage5 = candidates.filter((candidate) => candidate.Stage.name === 'Передано заказчику').length;
  // const stage6 = candidates.filter((candidate) => candidate.Stage.name === 'Назначено интервью с заказчиком').length;
  // const stage7 = candidates.filter((candidate) => candidate.Stage.name === 'Выставлен оффер').length;
  // const stage8 = candidates.filter((candidate) => candidate.Stage.name === 'Принял оффер и вышел на работу').length;
  // const stage9 = candidates.filter((candidate) => candidate.Stage.name === 'Отказ').length;
  
    return (
    <>
    {[false].map((expand) => (
    <Navbar key={expand} expand={expand} className="mb-3">
    <Container fluid>
        <Navbar.Brand style={{ color: '#ffffff' }}>{user ? `${user.name}` : 'Guest'}</Navbar.Brand>
            <Nav.Link className='text-white' as={Link} to="/">
              Все кандидаты{' '}
              <Badge bg="secondary">{candidates.length}</Badge>
              </Nav.Link>
            {
            user ? (
            <>
            <Nav.Link className='text-white' as={Link} to="/new-candidate">Добавить кандидата</Nav.Link>
            <Nav.Link as={Link} onClick={logoutHandler} className="border border-wite rounded-3 px-2 py-1 text-white">Выйти</Nav.Link>
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
                    <Nav.Link as={Link} to="/new" className={location.pathname === '/new' ? 'text-white fw-bold' : 'text-white'}>
                    Новые{' '}
                    <Badge bg="secondary">{candidateCounts.stage1}</Badge>
                    </Nav.Link>
                      <Nav.Link as={Link} to="/invitation" className={location.pathname === '/invitation' ? 'text-white fw-bold' : 'text-white'}>
                        Письмо-приглашение{' '}
                        <Badge bg="secondary">{candidateCounts.stage2}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/call" className={location.pathname === '/call' ? 'text-white fw-bold' : 'text-white'}>
                        Звонок-скрининг{' '}
                        <Badge bg="secondary">{candidateCounts.stage3}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/video-interview" className={location.pathname === '/video-interview' ? 'text-white fw-bold' : 'text-white'}>
                        Видеоинтервью{' '}
                        <Badge bg="secondary">{candidateCounts.stage4}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/transferred" className={location.pathname === '/transferred' ? 'text-white fw-bold' : 'text-white'}>
                        Передано заказчику{' '}
                        <Badge bg="secondary">{candidateCounts.stage5}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/interview" className={location.pathname === '/interview' ? 'text-white fw-bold' : 'text-white'}>
                        Интервью с заказчиком{' '}
                        <Badge bg="secondary">{candidateCounts.stage6}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/offer" className={location.pathname === '/offer' ? 'text-white fw-bold' : 'text-white'}>
                        Выставлен оффер{' '}
                        <Badge bg="secondary">{candidateCounts.stage7}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/job" className={location.pathname === '/job' ? 'text-white fw-bold' : 'text-white'}>
                        Вышел на работу{' '}
                        <Badge bg="secondary">{candidateCounts.stage8}</Badge>
                        </Nav.Link>
                      <Nav.Link as={Link} to="/refusal" className={location.pathname === '/refusal' ? 'text-white fw-bold' : 'text-white'}>
                        Отказ{' '}
                        <Badge bg="secondary">{candidateCounts.stage9}</Badge>
                        </Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                  </Navbar.Offcanvas>
            </>
            ) : (
            <Nav.Link as={Link} to="/login" className="border border-wite rounded-3 px-2 py-1 text-white">Войти</Nav.Link>
        )
        }
       
               
              </Container>
            </Navbar>
          ))}
        </>
    );
}
