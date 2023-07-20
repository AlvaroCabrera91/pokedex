document.addEventListener("DOMContentLoaded", function () {
    const pokedex = document.getElementById("pokedex");
  
    fetchPokemonData();
    
    async function fetchPokemonData() {
      for (let i = 1; i <= 150; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const dato = await response.json();
        const pokemon = {
          name: dato.name,
          image: dato.sprites.versions["generation-v"]["black-white"].animated.front_default,
          type: dato.types.map((type) => type.type.name).join(", "),
          id: dato.id
        };
        
        displayPokemon(pokemon);
      }

      window.AOS.init()
    }
  
    function displayPokemon(pokemon) {
      const carta = document.createElement("li");
      carta.classList.add("card");
      carta.setAttribute("data-aos", "flip-right");
      
  
      const cardTitulo = document.createElement("h2");
      cardTitulo.classList.add("card-title");
      cardTitulo.innerText = pokemon.name;
  
      const cardSubtitulo = document.createElement("h3");
      cardSubtitulo.classList.add("card-subtitle");
      cardSubtitulo.innerText = `Nº ${pokemon.id}`;
  
      const cardImagen = document.createElement("img");
      cardImagen.classList.add("card-image");
      cardImagen.src = pokemon.image;
  
      const cardTipo = document.createElement("p");
      cardTipo.innerText = `Type: ${pokemon.type}`;
  
      carta.appendChild(cardTitulo);
      carta.appendChild(cardSubtitulo);
      carta.appendChild(cardImagen);
      carta.appendChild(cardTipo);
  
      pokedex.appendChild(carta);
    }
  });
  