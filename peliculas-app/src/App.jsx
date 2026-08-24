import { useState } from 'react'
import './App.css'
import { videojuegosIniciales } from './data/videojuegos'
import TablaVideojuegos from './components/TablaVideojuegos'

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
    <div className="app">
      <h1>Mis Películas Favoritas</h1>

      <div className="form-agregar">
        <input
          type="text"
          value={nuevaPelicula}
          onChange={(e) => setNuevaPelicula(e.target.value)}
          placeholder="Nueva película"
        />

        <button onClick={agregarPelicula}>
          Agregar
        </button>
      </div>

      {peliculas.map((pelicula, index) => (
        <Pelicula key={index} titulo={pelicula} />
      ))}

      <hr className="separador" />

      <section className="seccion-extra">
        <h2>Extra: Tabla de Videojuegos</h2>
        <p className="descripcion-extra">
          Sección adicional con estructura de datos en objetos y componente con
          archivo de estilos propio.
        </p>

        <TablaVideojuegos videojuegos={videojuegosIniciales} />
      </section>

    </div>
  )
}

export default App
