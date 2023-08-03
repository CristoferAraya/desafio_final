import { useState, useEffect } from 'react';
import { DataProfesionales } from '../services/getDataProfesionales';

const DataProfesionales = () => {
  const [profesionales, setProfesionales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataProfesionales();
        setProfesionales(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return profesionales;
};

export default DataProfesionales;