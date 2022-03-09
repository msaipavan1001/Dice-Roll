//alert("Hello");

function start() {
    let randomNum1 = Math.floor(Math.random() * 6) + 1
    let randomNum2 = Math.floor(Math.random() * 6) + 1

    console.log(randomNum1, randomNum2);
    //First element
    let element1 = document.querySelector(".img1")
    console.log(element1)
    let attribute1 = element1.getAttribute('src')
    console.log(attribute1) //images/dice6.png
    element1.setAttribute('src', `images/dice${randomNum1}.png`)
    //console.log(element1.setAttribute('src', `images/dice${randomNum1}.png`))

    //Second element
    let element2 = document.querySelector(".img2")
    console.log(element2)
    let attribute2 = element2.getAttribute('src')
    console.log(attribute2) //images/dice6.png
    element2.setAttribute('src', `images/dice${randomNum2}.png`)
    //console.log(element1.setAttribute('src', `images/dice${randomNum1}.png`))

    if (randomNum1 > randomNum2) {
        let heading = document.querySelector("h3")
        heading.innerHTML = "Player 1 wins"
    } else if (randomNum1 < randomNum2) {
        let heading = document.querySelector("h3")
        heading.innerHTML = "Player 2 wins"
    } else if (randomNum1 === randomNum2) {
        let heading = document.querySelector("h3")
        heading.innerHTML = "Draw roll the dice again"
    }

}
