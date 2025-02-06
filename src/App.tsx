import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FindCard from './component/Card'

const cardArr = ["./images/bird.jpg", "./images/cat.webp", "./images/fish.jpg", "./images/seahorse.jpg", "./images/seal.webp", "./images/spider.jpg", "./images/bird.jpg", "./images/cat.webp", "./images/fish.jpg", "./images/seahorse.jpg", "./images/seal.webp", "./images/spider.jpg"]

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
