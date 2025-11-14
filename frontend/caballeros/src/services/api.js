import axios from 'axios';

// URLs de los microservicios
const API_BASE_URLS = {
  consultar: 'http://localhost:8081/consultar-personajes',
  insertar: 'http://localhost:8080/insertar-personajes',
  actualizar: 'http://localhost:8082/actualizar-personajes',
  eliminar: 'http://localhost:8083/eliminar-personajes'
};

// Función para obtener todos los personajes
export const getPersonajes = async () => {
  try {
    const response = await axios.get(API_BASE_URLS.consultar);
    return response.data;
  } catch (error) {
    console.error('Error al obtener personajes:', error);
    throw error;
  }
};

// Función para crear un nuevo personaje
export const createPersonaje = async (personaje) => {
  try {
    const response = await axios.post(API_BASE_URLS.insertar, personaje);
    return response.data;
  } catch (error) {
    console.error('Error al crear personaje:', error);
    throw error;
  }
};

// Función para actualizar un personaje
export const updatePersonaje = async (id, personaje) => {
  try {
    const response = await axios.put(`${API_BASE_URLS.actualizar}/${id}`, personaje);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar personaje:', error);
    throw error;
  }
};

// Función para eliminar un personaje
export const deletePersonaje = async (id) => {
  try {
    const response = await axios.delete(`${API_BASE_URLS.eliminar}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar personaje:', error);
    throw error;
  }
};
