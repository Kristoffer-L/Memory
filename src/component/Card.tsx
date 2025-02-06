



function FindCard(cardArr: string[]) {
    console.log("cardArr", cardArr.image)
    return(
        <ul className="cards-box">
    {cardArr.image.map((item) => {
            return (  <li key={item} className="card-section">
                    <img class="card-image" src={item} alt="logo" />
                    <img className="back-face" src="./images/cardCover.jpg" alt="card cover" />
                </li>)
        })}
        </ul>
    )
}

export default FindCard