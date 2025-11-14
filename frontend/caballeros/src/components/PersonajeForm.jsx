import { useState, useEffect } from 'react';
import { createPersonaje, updatePersonaje } from '../services/api';

const PersonajeForm = ({ personaje, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    altura: '',
    constelacion: '',
    urlImagen: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFormData({
      nombre: personaje?.nombre || '',
      edad: personaje?.edad || '',
      altura: personaje?.altura || '',
      constelacion: personaje?.constelacion || '',
      urlImagen: personaje?.urlImagen || ''
    });
  }, [personaje]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (!formData.nombre.trim()) throw new Error('El nombre es obligatorio');
      if (!formData.constelacion.trim()) throw new Error('La constelación es obligatoria');

      const personajeData = {
        nombre: formData.nombre.trim(),
        edad: parseFloat(formData.edad) || 0,
        altura: parseFloat(formData.altura) || 0,
        constelacion: formData.constelacion.trim(),
        urlImagen: formData.urlImagen.trim() || null
      };

      personaje
        ? await updatePersonaje(personaje.id, personajeData)
        : await createPersonaje(personajeData);

      onSave();
    } catch (err) {
      setError(err.message || 'Error al guardar el personaje');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formulario-personaje">
      <h2>{personaje ? 'Editar Personaje' : 'Agregar Nuevo Personaje'}</h2>
      {error && <div className="error">{error}</div>}

      <form onSubmit={handleSubmit}>
        {['nombre', 'edad', 'altura', 'constelacion', 'urlImagen'].map((field, i) => (
          <div className="form-group" key={i}>
            <label htmlFor={field}>
              {field === 'nombre' && '🧍 Nombre'}
              {field === 'edad' && '🎂 Edad'}
              {field === 'altura' && '📏 Altura (cm)'}
              {field === 'constelacion' && '✨ Constelación'}
              {field === 'urlImagen' && '🖼️ URL de Imagen'}
            </label>
            <input
              type={field === 'urlImagen' ? 'url' : field === 'edad' || field === 'altura' ? 'number' : 'text'}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={
                field === 'nombre' ? 'Ej. Seiya' :
                field === 'edad' ? 'Ej. 15' :
                field === 'altura' ? 'Ej. 170.5' :
                field === 'constelacion' ? 'Ej. Pegaso' :
                'https://ejemplo.com/imagen.jpg'
              }
              required={field === 'nombre' || field === 'constelacion'}
              min={field === 'edad' || field === 'altura' ? '0' : undefined}
              step={field === 'edad' || field === 'altura' ? '0.01' : undefined}
            />
          </div>
        ))}

        <div className="form-actions">
          <button type="submit" disabled={loading} className="btn-save">
            {loading ? 'Guardando...' : personaje ? 'Actualizar' : 'Crear'}
          </button>
          <button type="button" onClick={onCancel} className="btn-cancel">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonajeForm;
