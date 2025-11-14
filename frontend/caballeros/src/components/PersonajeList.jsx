import { useState, useEffect } from 'react';
import { getPersonajes, deletePersonaje } from '../services/api';

const PersonajeList = ({ onEdit, refreshTrigger }) => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadPersonajes();
  }, [refreshTrigger]);

  const loadPersonajes = async () => {
    try {
      setLoading(true);
      const data = await getPersonajes();
      setPersonajes(data);
      setError(null);
    } catch (err) {
      setError('Error al cargar personajes');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Eliminar este personaje?')) {
      try {
        await deletePersonaje(id);
        loadPersonajes();
      } catch {
        alert('Error al eliminar');
      }
    }
  };

  const filtered = personajes.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return (
    <div className="personaje-list">
      <h2>Lista de Caballeros del Zodiaco</h2>
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando personajes...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="personaje-list">
      <h2>Lista de Caballeros del Zodiaco</h2>
      <div className="error">{error}</div>
    </div>
  );

  return (
    <div className="personaje-list">
      <h2>Lista de Caballeros del Zodiaco</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="personajes-grid">
        {filtered.map((p) => (
          <div key={p.id} className="personaje-card">
            <div className="personaje-image">
              <img
                src={p.urlImagen || 'https://via.placeholder.com/180x100/667eea/ffffff?text=Sin+Imagen'}
                alt={p.nombre}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/180x100/f093fb/f5576c?text=Imagen+No+Disponible';
                }}
              />
            </div>
            <div className="personaje-info">
              <h3>{p.nombre}</h3>
              <p><strong>Edad:</strong> {p.edad} años</p>
              <p><strong>Altura:</strong> {p.altura} cm</p>
              <p><strong>Constelación:</strong> {p.constelacion}</p>
            </div>
            <div className="personaje-actions">
              <button onClick={() => onEdit(p)} className="btn-edit">Editar</button>
              <button onClick={() => handleDelete(p.id)} className="btn-delete">Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && !loading && (
        <p>No se encontraron personajes.</p>
      )}
    </div>
  );
};

export default PersonajeList;
