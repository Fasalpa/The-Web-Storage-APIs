












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
