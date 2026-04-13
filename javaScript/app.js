const pokemonInput = document.getElementById("pokemonInput");
const searchBtn = document.getElementById("searchBtn");
const pokemonImage = document.getElementById("pokemonImage");
const pokemonName = document.getElementById("pokemonName");
const saveFavoriteBtn = document.getElementById("saveFavoriteBtn");
const favoritesList = document.getElementById("favoritesList");

let historialGuardados = document.getElementById("historialGuardados");

//aquí vamos a guardar el poke que mostramos en pntlla
let datosPokemonActual = null;

function buscarPokemon() {

    const nombre = pokemonInput.value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;

  fetch(url)
    .then(function (respuesta) { //aquí tenemos una promesa de que nos va a buscar algo.
      return respuesta.json();
    })
    .then(function (datos) {
      //aquí llamamos al pokemon
      datosPokemonActual = {
        id: datos.id,
        name: datos.name,
        image: datos.sprites.front_default,
      };
      pokemonName.textContent = datosPokemonActual.name;
      pokemonImage.src = datosPokemonActual.image;
      pokemonImage.style.display = "inline";
      saveFavoriteBtn.style

      console.log(datos);
    })
    .catch(function (error) {
      alert("¡Error! Pokémon no encontrado");
    });
}
//aquí activamos el botón de buscar pokemón
searchBtn.addEventListener("click", buscarPokemon);