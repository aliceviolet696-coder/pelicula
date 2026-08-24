import './TablaVideojuegos.css'

function TablaVideojuegos({ videojuegos }) {

  return (
    <div className="tabla-contenedor">
      <table className="tabla-videojuegos">
        <thead>
          <tr>
            <th>Título</th>
            <th>Género</th>
            <th>Plataforma</th>
            <th>Lanzamiento</th>
            <th>Precio</th>
            <th>Disponible</th>
            <th>Progreso</th>
          </tr>
        </thead>
        <tbody>
          {videojuegos.map((juego) => (
            <tr key={juego.id} className={juego.disponible ? '' : 'no-disponible'}>
              <td data-titulo="true">{juego.titulo}</td>
              <td>{juego.genero}</td>
              <td>{juego.plataforma}</td>
              <td>{juego.lanzamiento}</td>
              <td>${juego.precio.toFixed(2)}</td>
              <td>
                <span className={juego.disponible ? 'badge si' : 'badge no'}>
                  {juego.disponible ? 'Sí' : 'No'}
                </span>
              </td>
              <td>
                <div
                  className="barra-progreso"
                  role="progressbar"
                  aria-valuenow={juego.progreso}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className={
                      'barra-relleno ' +
                      (juego.progreso >= 75 ? 'alta' : juego.progreso >= 40 ? 'media' : 'baja')
                    }
                    style={{ width: `${juego.progreso}%` }}
                  >
                    {juego.progreso}%
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaVideojuegos
