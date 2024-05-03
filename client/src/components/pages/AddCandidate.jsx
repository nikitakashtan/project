import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../../axiosInstance';

export default function AddCandidate() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    experience: '',
    phone: '',
    hh: ''
  })
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadMessage, setLoadMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const newCandidateHandler = async (e) => {
    try {
      const formData = new FormData(e.target);
      formData.append('stage_id', 2)
      const res = await axiosInstance.post('/candidates', formData);
      if (res.status === 200) {
        setCandidates((prev) => [res.data, ...prev]);
      } else {
        throw new Error('Произошла ошибка при добавлении кандидата')
      }
    } catch (error) {
      throw error;
    }
  }

  const mailHandler = async () => {
    try {
      const res = await axiosInstance.post('/sendmail', userData);
      if (res.status !== 200) {
        throw new Error('Произошла ошибка при отправке письма')
      }
    } catch (error) {
      throw error;
    }
  }
 
  const userDataHandler = (e) => {
    if (e.target.name === 'experience') {
      if (!/^\d+$/.test(e.target.value)) {
        setErrorMessage('Пожалуйста, введите число');
      } else if (parseInt(e.target.value) < 1 || parseInt(e.target.value) > 60) {
        setErrorMessage('Число должно быть от 1 до 60')
      } else {
        setErrorMessage('');
      }
    }
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setLoading(true);
      try {
        await newCandidateHandler(e);
        await mailHandler();
        setUserData({
          name: '',
          email: '',
          experience: '',
          phone: '',
          hh: '',
        });
        setLoadMessage('Приглашение успешно отправлено');
      } catch (error) {
        setLoadMessage('Произошла ошибка');
      } finally {
        setLoading(false);
        setTimeout(() => {
          setLoadMessage('');
        }, 8000);
      }
    }
  }

  return (
    <>    
      <Form className='w-50 p-3' onSubmit={submitHandler} style={{ margin: '0 auto', position: 'relative' }}>
        <fieldset disabled={loading}>
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
            <Form.Control type="text" name="experience" value={userData.experience} onChange={userDataHandler} placeholder="Введите стаж работы" required />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control type="tel" name="phone" value={userData.phone} onChange={userDataHandler} placeholder="Введите номер телефона" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicHh">
            <Form.Label>Ссылка на профиль</Form.Label>
            <Form.Control type="text" name="hh" value={userData.hh} onChange={userDataHandler} placeholder="Ссылка на профиль в hh.ru" required />
          </Form.Group>

          <Button variant="dark" type="submit" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
            {loading ? 'Загрузка...' : 'Добавить кандидата'}
          </Button>
        </fieldset>
      </Form>
      {loadMessage && <p className='mb-0' style={{ textAlign: 'center', marginTop: '32px', color: loadMessage.includes('отправлено') ? 'green' : 'red' }}>{loadMessage}</p>}
    </>
  )
}
