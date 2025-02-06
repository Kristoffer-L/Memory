import { useState, useEffect } from 'react'
import './App.css'
import FindCard from './component/Card'

const cardArr = [
  {"src": "./images/bat.png", matched: false}, 
  {"src": "./images/cat.png", matched: false}, 
  {"src": "./images/fish.png", matched: false}, 
  {"src": "./images/seahorse.png", matched: false}, 
  {"src": "./images/crab.png", matched: false}, 
  {"src": "./images/snake.png", matched: false}
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([]) 

  const shuffle = () => { 
    const shuffledCards = [...cardArr, ...cardArr]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))

  setCards(shuffledCards)
  setTurns(0)
}; 

const handleChoice = card => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

}

useEffect(() => {
  if(choiceOne && choiceTwo) {

    if (choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src) {
            return {...card, matched: true}
          } else {
            return card 
          }
        })
      })
      console.log("those cards match")
      resetTurn()
    } else {
      console.log("those cards do not match")
      setTimeout(() => resetTurn(), 1000)
    }
  }
}, [choiceOne, choiceTwo])

const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}

  console.log(cards, turns)

  // const handleChoice =(card) => {



  return (
    <>


    <h1>Magic Match</h1>
    <button className="start-btn" onClick={shuffle}>Start</button>

    <div className="card">
      {cards.map((card) => (
        <FindCard  key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} />
      ))}
    </div>

    </>
  )
}

export default App
