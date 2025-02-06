



function FindCard(cardArr: string[]) {
    console.log("cardArr", cardArr.image)
    return(
        <ul>
    {cardArr.image.map((item) => {
                <li key={item} className="card-section">
                    <img src={item} alt="logo" />
                </li>
        })}
        </ul>
    )
}

export default FindCard