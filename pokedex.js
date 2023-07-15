document.addEventListener("DOMContentLoaded", function () {
    const pokedex = document.getElementById("pokedex");
  
    fetchPokemonData();
    
    async function fetchPokemonData() {
      for (let i = 1; i <= 150; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        const pokemon = {
          name: data.name,
          image: data.sprites.front_default,
          type: data.types.map((type) => type.type.name).join(", "),
          id: data.id
        };
        
        displayPokemon(pokemon);
      }
    }
  
    function displayPokemon(pokemon) {
      const card = document.createElement("li");
      card.classList.add("card");
  
      const cardTitle = document.createElement("h2");
      cardTitle.classList.add("card-title");
      cardTitle.innerText = pokemon.name;
  
      const cardSubtitle = document.createElement("h3");
      cardSubtitle.classList.add("card-subtitle");
      cardSubtitle.innerText = `#${pokemon.id}`;
  
      const cardImage = document.createElement("img");
      cardImage.classList.add("card-image");
      cardImage.src = pokemon.image;
  
      const cardType = document.createElement("p");
      cardType.innerText = `Type: ${pokemon.type}`;
  
      card.appendChild(cardTitle);
      card.appendChild(cardSubtitle);
      card.appendChild(cardImage);
      card.appendChild(cardType);
  
      pokedex.appendChild(card);
    }
  });
  