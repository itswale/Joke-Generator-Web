const jokeText = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJokes)

generateJokes()
//async/await functon to get jokes from api url
async function generateJokes(){
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
    )
    const data = await res.json();
    console.log(data)
    console.log(data.joke)
    console.log(data.delivery)
    let joke = ""
    if (data.joke == undefined) {
        joke = `${data.setup} <br /> ${data.delivery}`
    } else {
        joke = data.joke
    }
    //sends jokes to the joke page
    jokeText.innerHTML = joke

}