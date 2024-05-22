import React from 'react';

function App() {
  return (
    <div className="container">
      <h1 className="mt-5 mb-4 text-center">Formulario de Registro de Proveedores</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="tipoPersona" className="form-label">Personería Jurídica:</label>
          <select id="tipoPersona" name="tipoPersona" className="form-select" required>
            <option value="natural">Persona Natural</option>
            <option value="juridica">Persona Jurídica</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="nitRut" className="form-label">Nit o RUT:</label>
          <input type="text" className="form-control" id="nitRut" name="nitRut" required />
        </div>
        <div className="mb-3">
          <label htmlFor="razonSocial" className="form-label">Nombre de la Razón Social:</label>
          <input type="text" className="form-control" id="razonSocial" name="razonSocial" required />
        </div>
        <div className="mb-3">
          <label htmlFor="representanteLegal" className="form-label">Nombre del Representante Legal:</label>
          <input type="text" className="form-control" id="representanteLegal" name="representanteLegal" required />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono de Contacto:</label>
          <input type="tel" className="form-control" id="telefono" name="telefono" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email de Contacto:</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="ciudad" className="form-label">Ciudad:</label>
          <input type="text" className="form-control" id="ciudad" name="ciudad" required />
        </div>
        <div className="mb-3">
          <label htmlFor="pais" className="form-label">País:</label>
          <select id="pais" name="pais" className="form-select" required>
            <option value="colombia">Colombia</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="departamento" className="form-label">Departamento:</label>
          <select id="departamento" name="departamento" className="form-select" required>
            <option value="antioquia">Antioquia</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="direccion" className="form-label">Dirección:</label>
          <textarea className="form-control" id="direccion" name="direccion" rows="4" required></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="rut" className="form-label">Cargar RUT (PDF):</label>
          <input type="file" className="form-control" id="rut" name="rut" accept=".pdf" required />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  );
}

export default App;

