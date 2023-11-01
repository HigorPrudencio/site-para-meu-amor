import { useState } from 'react'

import './App.css'

function App() {
  const [mostrarMensagem, setMostrarMensagem] = useState(false); 

  const toggleMensagem = () => {
    setMostrarMensagem(!mostrarMensagem);
  
  }
  return (
    <>
    <div>
      <h1>inicio</h1>
      <button onClick={toggleMensagem}>
        {mostrarMensagem ? 'Esconder Mensagem' : 'Mostrar Mensagem'}
      </button>
      {mostrarMensagem && <p>funcionei</p>}
      </div>
    </>
  )
}

export default App
