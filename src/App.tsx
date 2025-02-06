import { useState } from 'react'
import './App.css'
import FindCard from './component/Card'

const cardArr = [
  {"src": "./images/bat.png"}, 
  {"src": "./images/cat.png"}, 
  {"src": "./images/fish.png"}, 
  {"src": "./images/seahorse.png"}, 
  {"src": "./images/crab.png"}, 
  {"src": "./images/snake.png"}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState([])
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([]) 

  const shuffle = () => { 
    const shuffledCards = [...cardArr, ...cardArr]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))

  setCards(shuffledCards)
  setTurns(0)
}; 
  
  console.log(cards, turns)

  const handleChoice =(card) => {



  return (
    <>
      <button onClick={shuffle}>Start</button>
      <FindCard image={cardArr} />
    </>
  )
}

export default App
