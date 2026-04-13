const pokemonInput = document.getElementById('pokemonInput');
const searchBtn = document.getElementById('searchBtn');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonName = document.getElementById('pokemonName');
const saveFavoriteBtn = document.getElementById('saveFavoriteBtn');
const favoritesList = document.getElementById('favoritesList');


fetch(url) 
 .then(function(response) { 
 return response.json(); 
 }) 
 .then(function(data) { 
 // Datos del Pokémon aquí 
 console.log(data);
 }) 
 .catch(function(error) { 
 alert("¡Error! Pokémon no encontrado"); 
 });