const pokemonInput = document.getElementById('pokemonInput');
const searchBtn = document.getElementById('searchBtn');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonName = document.getElementById('pokemonName');
const saveFavoriteBtn = document.getElementById('saveFavoriteBtn');
const favoritesList = document.getElementById('favoritesList');

let pokemonActual = null;

// Buscar pokemon
searchBtn.addEventListener('click', function () {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonInput.value.toLowerCase()}`;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            pokemonActual = data;
            pokemonImage.src = data.sprites.front_default;
            pokemonName.textContent = data.name;
            console.log(data);
        })
        .catch(function (error) {
            alert("¡Error! Pokémon no encontrado");
        });
})

// Local storage
saveFavoriteBtn.addEventListener('click', function () {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    favoritos.push({
        nombre: pokemonActual.name,
        imagen: pokemonActual.sprites.front_default
    });

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
})


