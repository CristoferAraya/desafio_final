import { Col } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';

  const Review = ({ autor, texto, fecha, nota }) => {
  const renderStars = () => {
    const maxStars = 5;
    const stars = nota;
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
    <Col md={6}>
      <span>Por: {autor}</span>
      <div>{renderStars()}</div>
      <span>{fecha}</span>
      <p>{texto}</p>
    </Col>
  );
};

export default Review;