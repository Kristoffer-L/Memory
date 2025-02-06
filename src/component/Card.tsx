const cardArr = ["./images/bird.jpg", "./images/cat.webp", "./images/fish.jpg", "./images/seahorse.jpg", "./images/seal.webp", "./images/spider.jpg", "./images/bird.jpg", "./images/cat.webp", "./images/fish.jpg", "./images/seahorse.jpg", "./images/seal.webp", "./images/spider.jpg"]
let item = cardArr[Math.floor(Math.random() * cardArr.length)];
function FindCard() {
    console.log("cardArr", cardArr)
    return(
        <div className="card-section">
            <img className="card-image" src={item} alt="Logo" />
        </div>
    )
}

export default FindCard