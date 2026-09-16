import { useState, useEffect } from 'react'

function App() {
  const [mensaje, setMensaje] = useState('Cargando...')

  useEffect(() => {
    fetch('https://prueba-test-render.onrender.com/api/saludo')
      .then((res) => res.json())
      .then((data) => setMensaje(data.saludo))
      .catch((err) => setMensaje('Error al conectar con el backend: ' + err.message))
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h1>Frontend de prueba - Aragosand</h1>
      <p>Respuesta del backend:</p>
      <p style={{ fontWeight: 'bold', color: '#2b7a4b' }}>{mensaje}</p>
    </div>
  )
}

export default App