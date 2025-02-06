import "../Card.css"



export default function FindCard({ card, handleChoice, flipped }) {

    const handleClick = () => {
        handleChoice(card)
    }

return (
        <div className="card" key={card.id}>
            <div className={flipped ? "flipped" : ""}>
            <img className="front" src={card.src} alt="card cover" />
            <img className="back" src="./images/cardCover.jpg" onClick={handleClick} alt="card cover" />
            </div>
        </div>
    )
}