import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginPage({ loginHandler }) {
  return (
    <Form onSubmit={loginHandler}>
      <Form.Group className="mb-3">
        <Form.Label>Введите почту</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Введите пароль</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Войти
      </Button>
    </Form>
  );
}
