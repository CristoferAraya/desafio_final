import { Card, Row, Col, Image } from 'react-bootstrap';
import {
  FaCheck,
  FaStar,
  FaMapMarkerAlt,
  FaHeart,
  FaRegStar,
} from 'react-icons/fa';

export const FeaturedCard = ({ peluqueria }) => {
  const renderStars = () => {
    const maxStars = 5;
    const stars = peluqueria.estrellas;
    const starIcons = [];
    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starIcons.push(
          <FaStar
            key={i}
            className='star-icon'
          />
        );
      } else {
        starIcons.push(
          <FaRegStar
            key={i}
            className='star-icon'
          />
        );
      }
    }
    return starIcons;
  };

  return (
    <Card
      style={{ borderRadius: '10px' }}
      className='featured-card mb-3'
    >
      <Card.Body>
        <Row>
          <Col
            sm={12}
            lg={4}
          >
            <div className='circle'>
              <Image
                src={peluqueria.imagen}
                roundedCircle
                width={150}
                className='border border-white'
              />
            </div>
          </Col>
          <Col
            sm={12}
            lg={8}
          >
            {peluqueria.verificada && (
              <div>
                <FaCheck className='verification-icon' />
                <span className='ms-1'>verificada</span>
              </div>
            )}
            <h5>{peluqueria.nombre}</h5>
            <Row className='stars-row'>
              <Col xs={12}>{renderStars()}</Col>
            </Row>
            <FaMapMarkerAlt className='location-icon' />
            <span>{peluqueria.direccion}</span>
            <div>
              <button className='btn btn-primary rounded-pill'>Ver más</button>
              <button className='btn btn-success rounded-pill ms-2'>
                Reservar
              </button>
            </div>
            <FaHeart className='heart-icon' />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
