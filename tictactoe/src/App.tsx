import { useState } from 'react'
import { MyButton } from './components/MyButton'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { stephano } from './components/UserContext';

function App() {
  

  return (
    <div>
      <h1>{stephano.name}</h1>
      <p style={{fontStyle: "italic"}}>{stephano.description}</p>
      



    </div>
  )
}

export default App
