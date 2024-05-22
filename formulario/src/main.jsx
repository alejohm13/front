import axios from 'axios';

document.getElementById('formularioProveedor').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  
  try {
    const response = await axios.post('http://localhost:8080', formData);
    console.log(response.data); 
    alert('Proveedor registrado correctamente');
  } catch (error) {
    console.error('Error al registrar el proveedor:', error);
    alert('Hubo un error al registrar el proveedor');
  }
});
