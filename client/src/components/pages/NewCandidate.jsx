import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../axiosInstance';
import axios from 'axios';

export default function NewCandidate() {
  const [stages, setStages] = useState([]);
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    axios.create({
      baseURL: '/api',
      headers: {
        'Content-Type': 'application/json',
      },
    }).get('/stages').then((res) => {
      setStages(res.data);
    });
  }, []);

  const newCandidateHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.post('/candidates', formData);
    setCandidates((prev) => [res.data, ...prev]);
  }

  return (
    <Form className='w-50 p-3' onSubmit={newCandidateHandler} style={{ margin: '0 auto', position: 'relative' }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>ФИО</Form.Label>
        <Form.Control type="text" name="name" placeholder="Введите ФИО" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Адрес электронной почты</Form.Label>
        <Form.Control type="email" name="email" placeholder="Введите электронную почту" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicExperience">
        <Form.Label>Стаж работы</Form.Label>
        <Form.Control type="text" name="experience" placeholder="Введите стаж работы" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Номер телефона</Form.Label>
        <Form.Control type="tel" name="phone" placeholder="Введите номер телефона" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId='formBasicStage'>
        <Form.Label>Этап подбора кандидата</Form.Label>
        <Form.Select name="stage" required style={{ cursor: 'pointer' }}>
          <option disabled>Выберите этап подбора</option>
          {stages.map((stage) => (
            <option key={stage.id}>{stage.name}</option>
          ))}

        </Form.Select>
      </Form.Group>

      <Button className='bg-success' variant="primary" type="submit" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        Добавить кандидата
      </Button>
    </Form>
  )
}
