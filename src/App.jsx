import './App.css'
import { useState } from 'react'

function App() {
  const [tareas, setTareas] = useState([])
  const [texto, setTexto] = useState('')

  function agregarTarea() {
    if (texto === '') return
    const nuevaTarea = { texto: texto, completada: false }
    setTareas([...tareas, nuevaTarea])
    setTexto('')
  }

  function eliminarTarea(index) {
    const nuevasTareas = tareas.filter((_, i) => i !== index)
    setTareas(nuevasTareas)
  }

  function completarTarea(index) {
    const nuevasTareas = tareas.map((tarea, i) => {
      if (i === index) {
        return { ...tarea, completada: !tarea.completada }
      }
      return tarea
    })
    setTareas(nuevasTareas)
  }

  const pendientes = tareas.filter(t => !t.completada).length

  return (
   <div>
      <h1>Mis tareas</h1>
      <p>Pendientes: {pendientes} / Total: {tareas.length}</p>
      <div className="input-row">
        <input
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe una tarea..."
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
              {tarea.texto}
            </span>
            <button onClick={() => completarTarea(index)}>✅</button>
            <button onClick={() => eliminarTarea(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App