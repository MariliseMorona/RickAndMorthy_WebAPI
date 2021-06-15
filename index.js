const image = document.querySelector(`.image`);
var nameCharacter = document.querySelector(`.nameCharacter`);

let numberRandom = Math.floor(Math.random()*671);


fetch(`https://rickandmortyapi.com/api/character/${numberRandom}`, {
    method: 'GET',
    headers:{
        Accept: `application/json`,
        "Content-type": `application/json`
    }

})
.then((response) => response.json())
.then((data) => {
    image.src = data.image;
    nameCharacter = data.name;
        
})


