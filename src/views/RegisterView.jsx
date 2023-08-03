import React, { useState } from 'react';

  const RegisterView = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
  };

  return (
    <div className="container mt-5">
      <h1>Registarte</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre mascota:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre mascota"
            name="nombre mascota"
            value={formData.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Numero celular" className="form-label">
            Número celular:
          </label>
          <input
            type="text"
            className="form-control"
            id="numero celular"
            name="numero celuar"
            value={formData.nombre}
            onChange={handleInputChange}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo electrónico:
          </label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmar correo electrónico" className="form-label">
           Confirmar correo electrónico:
          </label>
          <input
            type="text"
            className="form-control"
            id="confirmar correo"
            name="confirmar correo"
            value={formData.nombre}
            onChange={handleInputChange}
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            name="contrasena"
            value={formData.contrasena}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmar contaseña" className="form-label">
           Confirmar contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmar contraseña"
            name="confirmar contraseña"
            value={formData.contrasena}
            onChange={handleInputChange}
          />
          
        </div>
        
  
          <div className='boton-registro'>
            <button type="button" className="btn btn-primary">Registrate</button>
          </div>
        
            <button type="button" className="btn btn-secondary">Cancelar</button>
       
    

       
      </form>
      
    </div>
  );
};

export default RegisterView;