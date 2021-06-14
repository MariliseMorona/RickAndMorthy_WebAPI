const image = document.querySelector('img');
let nameCharacter = document.querySelector('output');


getCharacter = () =>{
    let numberRandom = Math.floor(Math.random()*671);
return fetch(`https://rickandmortyapi.com/api/character/${numberRandom}`, {
    method: 'GET', 
    headers: {
        Accept: 'application/json',
        "Content-type": 'application/json'
    }
}).then((response) => response.json()).then((data) => {
    image.src = data.image;
    nameCharacter = data.name;
});
}
