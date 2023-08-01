import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

  const PerfilEdit = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    onSave({ name, email });
  };

  return (
    <div>
      <h2>Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Correo electrónico:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Agrega más campos de edición del perfil aquí */}
        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default PerfilEdit;



