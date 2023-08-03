import { useState, useEffect } from 'react';
import { DataPeluquerias } from '../services/getDataPeluquerias';

 const DataPeluquerias = () => {
  const [peluquerias, setPeluquerias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataPeluquerias();
        setPeluquerias(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return peluquerias;
};

export default DataPeluquerias;