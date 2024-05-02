import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../axiosInstance';
import axios from 'axios';
import Loader from '../hoc/Loader';

export default function AddCandidate() {
  const [stages, setStages] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    email: ''
  })
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
    try {
      const formData = Object.fromEntries(new FormData(e.target));
      const res = await axiosInstance.post('/candidates', formData);
      if (res.status === 200) {
        setCandidates((prev) => [res.data, ...prev]);
        console.log('Added candidate successfully')
      } else {
        console.log('Error adding candidate')
      }
    } catch (error) {
      console.log('An error has occured')
    }
  }

  const mailHandler = async () => {
    try {
      const res = await axiosInstance.post('/sendmail', userData);
      if (res.status === 200) {
        console.log('Email sent successfully')
      } else {
        console.log('Error sending email');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await newCandidateHandler(e);
      await mailHandler();
      console.log('Success')
    } catch (error) {
      console.log('Error')
    }
  }

  const userDataHandler = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Form className='w-50 p-3' onSubmit={submitHandler} style={{ margin: '0 auto', position: 'relative' }}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>ФИО</Form.Label>
        <Form.Control type="text" name="name" value={userData.name} onChange={userDataHandler} placeholder="Введите ФИО" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Адрес электронной почты</Form.Label>
        <Form.Control type="email" name="email" value={userData.email} onChange={userDataHandler} placeholder="Введите электронную почту" required />
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
        <Form.Select name="stage_id" required style={{ cursor: 'pointer' }}>
          <option disabled>Выберите этап подбора</option>
          {stages.map((stage) => (
            <option key={stage.id} value={stage.id}>{stage.name}</option>
          ))}

        </Form.Select>
      </Form.Group>

      <Button variant="dark" type="submit" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
        Добавить кандидата
      </Button>
    </Form>
  )
}
