import { Button, Card, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const FavoriteCard = ({ id, nombre, direccion, telefono, imagen }) => {
  return (
    <Card className='mb-3'>
      <Card.Body className='d-flex align-items-center'>
        <Form.Check
          type='checkbox'
          className='me-3'
          // checked={isSelected}
          // onChange={() => onSelect(id)}
        />
        <Image
          src='https://via.placeholder.com/100'
          roundedCircle
          width={100}
          height={100}
        />
        <div className='ms-3'>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            Descripción del producto. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, voluptatum.
          </Card.Text>
          <Card.Text>
            <strong>Precio: </strong>$100.00
          </Card.Text>
        </div>
        <div
          style={{
            marginLeft: 'auto',
          }}
        >
          <Button
            variant='outline-primary'
            className='rounded-pill'
            as={Link}
            // TODO: cambiar el link
            to={'/detalle'}
          >
            Ver Detalle
          </Button>
          <Button
            variant='primary'
            className='rounded-pill ms-2'
            as={Link}
            to={'/reservar'}
          >
            Reservar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};