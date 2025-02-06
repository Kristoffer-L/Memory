import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FindCard from './component/Card'

const cardArr = ["./images/bat.png", "./images/cat.png", "./images/fish.png", "./images/seahorse.png", "./images/crab.png", "./images/snake.png", "./images/bat.png", "./images/cat.png", "./images/fish.png", "./images/seahorse.png", "./images/crab.png", "./images/snake.png"]

const shuffle = (cardArr: string[]) => { 
    for (let i = cardArr.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
        [cardArr[i], cardArr[j]] = [cardArr[j], cardArr[i]]; 
    } 
    return cardArr; 
}; 
shuffle(cardArr)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FindCard image={cardArr} />
    </>
  )
}

export default App
