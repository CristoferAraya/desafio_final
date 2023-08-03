import { useState, useEffect } from 'react';
import { DataFavorites } from '../services/getDataFavoritos';

export const DataFavorites= () => {
  const [favoritos, setFavoritos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataFavoritos();
        setFavoritos(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return favoritos;
};

export default DataFavorites;