import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './ROUTER/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <AppRouter></AppRouter>
    </div>
  )
}

export default App
