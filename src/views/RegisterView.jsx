import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

  const RegisterView = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <Container className='d-flex justify-content-center align-items-center mb-5'>
      <div
        className='w-50 rounded'
        style={{
          backgroundColor: '#F5F5F5',
          margin: 'auto auto',
          padding: '2rem',
        }}
      >
        <h3>Registrate </h3>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type='text'
            placeholder='Nombre'
            className='mb-3'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
          />
          <Form.Control
            type='text'
            placeholder='Apellido'
            className='mb-3'
            name='apellidos'
            value={formData.apellidos}
            onChange={handleChange}
          />
           <Form.Control
            type='text'
            placeholder='Nombre mascota'
            className='mb-3'
            name='nombre mascota'
            value={formData.mascota}
            onChange={handleChange}
          />
          <Form.Control
            type='text'
            placeholder='Email'
            className='mb-3'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          <Form.Control
            type='text'
            placeholder='Teléfono'
            className='mb-3'
            name='telefono'
            value={formData.telefono}
            onChange={handleChange}
          />
          <Form.Control
            type='password'
            placeholder='Ingresa tu contraseña'
            className='mb-3'
            name='clave'
            value={formData.clave}
            onChange={handleChange}
          />
            <Form.Control
            type='password'
            placeholder='Repite contraseña'
            className='mb-3'
            name='repite contraseña'
            value={formData.confirmacion}
            onChange={handleChange}
          />
          <Button
            type='submit'
            variant='primary rounded-pill'
          >
            Registrarme
          </Button>
          
        </Form>
      </div>
    </Container>
  );
};

export default RegisterView;