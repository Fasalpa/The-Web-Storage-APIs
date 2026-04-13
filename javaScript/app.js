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
  if (nombre === "") {
    alert("No se ingresó el nombre de un Pokemón");
    return;
  }

<<<<<<< HEAD
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



//guardar favoritos
saveFavoriteBtn.addEventListener('click', function () {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || []; //si no hay favoritos array vacio, obtiene y convierte el que viene como string en format json

    favoritos.push({ //hace el push con el nombre y la imagen del pokemon actual
        nombre: datosPokemonActual.name,
        imagen: datosPokemonActual.image
    });

    localStorage.setItem('favoritos', JSON.stringify(favoritos)); //convierte el array en string y lo guarda en localStorage
    alert("Pokemon guardado en favoritos");
})
=======
  fetch(url)
    .then(function (respuesta) {
      //aquí tenemos una promesa de que nos va a buscar algo.
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

      console.log(datos);

      saveFavoriteBtn.style.display = "inline-block";
    })
    .catch(function (error) {
      alert(`¡Error! Pokémon no encontrado ${error.value}`);
    });
}
//aquí activamos el botón de buscar pokemón
searchBtn.addEventListener("click", buscarPokemon);
>>>>>>> 58028e5bbf45c2ee8fd8bf137506239a02cae822
