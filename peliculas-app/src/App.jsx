import { useState } from 'react'
import './App.css'
import { videojuegosIniciales } from './data/videojuegos'
import TablaVideojuegos from './components/TablaVideojuegos'

function App() {

  const [videojuegos, setVideojuegos] = useState(videojuegosIniciales);

  const [nuevoTitulo, setNuevoTitulo] = useState('');

  function agregarVideojuego() {
    if (nuevoTitulo.trim() !== '') {
      setVideojuegos([
        ...videojuegos,
        {
          id: Date.now(),
          titulo: nuevoTitulo,
          genero: 'Sin definir',
          plataforma: 'PC',
          lanzamiento: 2026,
          precio: 0,
          disponible: true,
          progreso: 0
        }
      ]);
      setNuevoTitulo('');
    }
  }

  return (
    <div className="app">
      <h1>Mis Videojuegos Favoritos</h1>

      <div className="form-agregar">
        <input
          type="text"
          value={nuevoTitulo}
          onChange={(e) => setNuevoTitulo(e.target.value)}
          placeholder="Nuevo videojuego"
        />

        <button onClick={agregarVideojuego}>
          Agregar
        </button>
      </div>

      <TablaVideojuegos videojuegos={videojuegos} />

    </div>
  )
}

export default App
