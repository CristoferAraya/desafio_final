import { useState, useEffect } from 'react';
import { DataServicios } from '../services/getDataServicios';

 const DataServicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataServicios();
        setServicios(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return servicios;
};

export default DataServicios;