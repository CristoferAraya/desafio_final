import { useState, useEffect } from 'react';
import { DataAgenda } from '../services/getDataAgenda';

  const DataAgenda = () => {
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataAgenda();
        setAgenda(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return agenda;
};

export default DataAgenda;