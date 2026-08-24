import { useState } from 'react'
import './App.css'

function Pelicula({ titulo }) {

  const [esFavorita, setEsFavorita] = useState(false);

  return (
    <div
      style={{
        border: esFavorita ? '2px solid gold' : '1px solid gray',
        borderRadius: '8px',
        margin: '5px',
        padding: '10px',
        backgroundColor: esFavorita ? '#fff9e6' : 'white',
        cursor: 'pointer'
      }}
      onClick={() => setEsFavorita(!esFavorita)}
    >
      <p style={{ margin: '0', fontWeight: esFavorita ? 'bold' : 'normal' }}>
        {titulo} {esFavorita ? "⭐" : ""}
      </p>
    </div>
  );
}


function App() {

  const [peliculas, setPeliculas] = useState(['Inception', 'Titanic', 'Avatar', 'Matrix']);

  const [nuevaPelicula, setNuevaPelicula] = useState('');

  function agregarPelicula() {
    if (nuevaPelicula.trim() !== '') {
      setPeliculas([...peliculas, nuevaPelicula]);
      setNuevaPelicula('');
    }
  }

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Mis Películas Favoritas</h1>

      <div>
        <input
          type="text"
          value={nuevaPelicula}
          onChange={(e) => setNuevaPelicula(e.target.value)}
          placeholder="Nueva película"
          style={{ flex: '1', padding: '8px' }}
        />

        <button
          onClick={agregarPelicula}
          style={{ padding: '8px', marginLeft: '5px' }}
        >
          Agregar
        </button>
      </div>

      {peliculas.map((pelicula, index) => (
        <Pelicula key={index} titulo={pelicula} />
      ))}

    </div>
  )
}

export default App
