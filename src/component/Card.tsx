



function FindCard(cardArr: string[]) {
    console.log("cardArr", cardArr)
    return(
        <ul>
    cardArr.map((item) => {
        console.log("item", item)
                <li className="card-section">
                    <img src={item} alt="logo" />
                </li>
        })
        </ul>
    )
}

export default FindCard