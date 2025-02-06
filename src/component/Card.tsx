



function FindCard(cardArr: string[]) {
    console.log("cardArr", cardArr.image)
    console.log("cardArr", ...cardArr.image)
    return(
        <ul className="cards-box">
    {cardArr.image.map((item) => {

            return (  <li key={item.src} className="card-section">
                    <img className="card-image" src={item.src} alt="logo" />
                    {/* <img className="back-face" src="./images/cardCover.jpg" alt="card cover" /> */}


                </li>)
        })}
        </ul>
    )
}

export default FindCard