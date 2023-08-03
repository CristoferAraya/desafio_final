import { useNavigate } from 'react-router-dom';

 const VerDetalle = () => {
  const navigate = useNavigate();

  const handleVerDetalle = (idPeluqueria) => {
    navigate(`/detalles/${idPeluqueria}`);
  };

  return { handleVerDetalle };
};

export default VerDetalle;