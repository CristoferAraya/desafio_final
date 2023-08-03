import { useState, useEffect } from 'react';
import { DataComentarios } from '../services/getDataComentarios';

 const DataComentarios = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataComentarios();
        setComentarios(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return comentarios;
};

export default DataComentarios;