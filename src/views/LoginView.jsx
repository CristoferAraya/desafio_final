import { Button, Col, Container, Form, Row } from 'react-bootstrap';


const LoginView = () => {
  return (
    <Container
      style={{
        height: '10rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding:'15rem'
      }}
    >
      <div className='mb-5 shadow-sm w-75'>
        <Row>
          <Col
            md={7}
            className='rounded-start'
            style={{
              backgroundColor: 'writhe',
              padding: '3rem',
            }}
          >
            <h3>Bienvenido de vuelta</h3>
            <p>
              Bienvenido,inicia sesion o registarte para poder hacer reservas y ver mas en detalle los servicios de las peluquerias caninas
            </p>
          </Col>
          <Col
            md={5}
            className='rounded-end'
            style={{
              padding: '5px',
              marginTop: '15px',
              backgroundColor: 'yellow',
              
            }}
          >
            <h3>Inicia Sesión</h3>
            <Form
              style={{
                padding:'',
                display: 'flex',
                flexDirection: 'column',
                with:'50%'
               
              }}
            >
              <Form.Control
                type='email'
                placeholder='Ingresa tu correo'
              />
              <Form.Control
                type='password'
                placeholder='Ingresa tu contraseña'
              />
              <Button
                variant='primary'
                type='submit'
                className='rounded-pill'
              >
                Ingresar
              </Button>
            </Form>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '1rem',
              }}
            >
              <div>¿Aún no tienes cuenta?</div>
              <Button
                variant='outline-primary'
                className='rounded-pill'
              >
                Regístrate
              </Button>
            </div>
            <p className='text-center mt-5 fw-bold'>Olvidé mi contraseña</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default LoginView;