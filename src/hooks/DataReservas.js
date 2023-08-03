import { useState, useEffect } from 'react';
import { DataReservas } from '../services/getDataReservas';

 const DataReservas = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataReservas();
        setReservas(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return reservas;
};

export default DataReservas;