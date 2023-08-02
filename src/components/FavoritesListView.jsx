import React, { useState } from 'react';

const FavoritesList = () => {
  // Estado local para almacenar la lista de favoritos
  const [favorites, setFavorites] = useState([]);

  // Función para agregar un favorito
  const addFavorite = (newFavorite) => {
    setFavorites([...favorites, newFavorite]);
  };

  // Función para eliminar un favorito
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <div className="container">
      <h2>Mis Favoritos</h2>
      <ul className="list-group">
        {favorites.map((fav) => (
          <li key={fav.id} className="list-group-item d-flex justify-content-between align-items-center">
            {fav.title}
            <button className="btn btn-danger" onClick={() => removeFavorite(fav.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
