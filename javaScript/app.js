<<<<<<< HEAD
=======
const pokemonInput = document.getElementById('pokemonInput');
const searchBtn = document.getElementById('searchBtn');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonName = document.getElementById('pokemonName');
const saveFavoriteBtn = document.getElementById('saveFavoriteBtn');
const favoritesList = document.getElementById('favoritesList');

>>>>>>> d9275d0885659d43362bb952fb0e2c9275ce2504













let historialGuardados = document.getElementById("historialGuardados");


url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    // Datos del Pokémon aquí
    console.log(datos);
  })
  .catch(function (error) {
    alert("¡Error! Pokémon no encontrado");
  });
