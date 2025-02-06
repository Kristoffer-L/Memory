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


  const shuffle = () => { 
    const shuffledCards = [...cardArr, ...cardArr]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))

  setCards(shuffledCards)
  setTurns(0)
}; 
  
  console.log(cards, turns)

  return (
    <>
    <h1>Magic Match</h1>
    <button onClick={shuffle}>Start</button>

    <div className="card-grid">
      {cards.map((card) => {
        return(
          <div className="card" key={card.id}>
              <div>
                <img className="front" src={card.src} alt="card cover" />
                <img className="back" src="./images/cardCover.jpg" alt="card cover" />
              </div>
          </div>
      )})
      }
    </div>
    </>
  )
}

export default App
