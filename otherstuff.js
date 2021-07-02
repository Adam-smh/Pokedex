let base_URL = "https://pokeapi.co/api/v2/pokemon/?limit=1";

let circle = document.querySelector(".circle");

let red = document.querySelector(".top");

let bottom = document.querySelector(".bottom");

let card = document.querySelector(".outer");

circle.addEventListener("click", function () {
  circle.classList.toggle("active");
  red.classList.toggle("active");
  bottom.classList.toggle("active");
  card.classList.toggle("active");
});

function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      getPokemonInfo(data.results[0].url);
      document.querySelector(".outer").innerHTML = `
      <div class"nav-container"><button onclick="getPokemonList('${data.previous}')"><i id="prev" class="far fa-arrow-alt-circle-left fa-3x"></i></button><button onclick="getPokemonList('${data.next}')"><i class="far fa-arrow-alt-circle-right fa-3x"></i></button></div>
      `;
    });
}

getPokemonList(base_URL);

function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".outer").innerHTML += `
      <div class="something">
        <img src="${data.sprites.front_default}">
        <div class="card-details">
          <div class="name">${data.name}</div> <br>
          <div class="description">
            <p class="type">Type: ${data.types[0].type.name}</p>
            <p class="height">Height: ${data.height}</p>
            <p class="weight">Weight: ${data.weight}</p>
            <p class="ability>Ability: ${data.abilities[0].ability.name}</p>
          </div>
        </div>
      </div>`;
    });
}
