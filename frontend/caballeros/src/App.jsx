import { useState } from 'react';
import PersonajeList from './components/PersonajeList';
import PersonajeForm from './components/PersonajeForm';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('list'); // 'list' or 'form'
  const [editingPersonaje, setEditingPersonaje] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleAddNew = () => {
    setEditingPersonaje(null);
    setCurrentView('form');
  };

  const handleEdit = (personaje) => {
    setEditingPersonaje(personaje);
    setCurrentView('form');
  };

  const handleSave = () => {
    setCurrentView('list');
    setEditingPersonaje(null);
    setRefreshTrigger(prev => prev + 1); // Trigger refresh of the list
  };

  const handleCancel = () => {
    setCurrentView('list');
    setEditingPersonaje(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Caballeros del Zodiaco</h1>
        <p>Gestión de Personajes</p>
      </header>

      <main className="app-main">
        {currentView === 'list' ? (
          <div>
            <div className="actions-bar">
              <button onClick={handleAddNew} className="btn-add">
                Agregar Nuevo Personaje
              </button>
            </div>
            <PersonajeList
              onEdit={handleEdit}
              refreshTrigger={refreshTrigger}
            />
          </div>
        ) : (
          <PersonajeForm
            personaje={editingPersonaje}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </main>
    </div>
  );
}

export default App;
