import { useState } from 'react'

function App() {
  const [tareas, setTareas] = useState([])
  const [texto, setTexto] = useState('')

  function agregarTarea() {
    setTareas([...tareas, texto])
    setTexto('')
  }

  function eliminarTarea(index) {
    const nuevasTareas = tareas.filter((_, i) => i !== index)
    setTareas(nuevasTareas)
  }

  return (
    <div>
      <h1>Mis tareas</h1>
      <p>Total de tareas: {tareas.length}</p>
      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button onClick={agregarTarea}>Agregar</button>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
    
  )
}

export default App