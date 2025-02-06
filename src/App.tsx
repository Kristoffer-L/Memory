import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FindCard from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FindCard />
    </>
  )
}

export default App
