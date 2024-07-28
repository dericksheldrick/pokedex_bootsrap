// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

const pokemonContainer = document.getElementById("pokemon_container");
const viewMoreButton = document.getElementById("view_more");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const pokemonModal = new bootstrap.Modal(
  document.getElementById("pokemonModal")
);
let offset = 0;
const limit = 8; // Number of Pokémon to load at a time

// Function to fetch Pokémon data
const fetchPokemon = async (offset, limit) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();
  return data.results;
};

// Function to fetch individual Pokémon details
const fetchPokemonDetails = async (pokemon) => {
  const response = await fetch(pokemon.url);
  return await response.json();
};

// Function to fetch Pokémon details by name or ID
const fetchPokemonByNameOrId = async (nameOrId) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);
  if (response.ok) {
    return await response.json();
  } else {
    alert("Pokémon not found!");
    return null;
  }
};

// Function to create a Pokémon card
const createPokemonCard = (pokemon) => {
  const col = document.createElement("div");
  col.classList.add("col");

  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.pokemonId = pokemon.id; // Store Pokémon ID in data attribute

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = pokemon.sprites.other["official-artwork"].front_default;
  img.alt = pokemon.name;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = pokemon.name;

  const cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = `Type: ${pokemon.types
    .map((type) => type.type.name)
    .join(", ")}`;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(img);
  card.appendChild(cardBody);
  col.appendChild(card);

  // Add event listener to card to show details
  card.addEventListener("click", () => showPokemonDetails(pokemon.id));

  return col;
};

// Function to load and display Pokémon
const loadPokemon = async (offset, limit) => {
  const pokemonList = await fetchPokemon(offset, limit);
  for (const pokemon of pokemonList) {
    const pokemonDetails = await fetchPokemonDetails(pokemon);
    const pokemonCard = createPokemonCard(pokemonDetails);
    pokemonContainer.appendChild(pokemonCard);
  }
};

// Function to search for Pokémon by name or number
const searchPokemon = async (nameOrId) => {
  const pokemonDetails = await fetchPokemonByNameOrId(nameOrId.toLowerCase());
  if (pokemonDetails) {
    pokemonContainer.innerHTML = ""; // Clear previous results
    const pokemonCard = createPokemonCard(pokemonDetails);
    pokemonContainer.appendChild(pokemonCard);
  }
};

// Function to show Pokémon details in modal
const showPokemonDetails = async (pokemonId) => {
  const pokemonDetails = await fetchPokemonByNameOrId(pokemonId);
  if (pokemonDetails) {
    document.getElementById("modalImg").src =
      pokemonDetails.sprites.other["official-artwork"].front_default;
    document.getElementById("modalName").textContent = pokemonDetails.name;
    document.getElementById(
      "modalType"
    ).textContent = `Type: ${pokemonDetails.types
      .map((type) => type.type.name)
      .join(", ")}`;
    document.getElementById(
      "modalAbilities"
    ).textContent = `Abilities: ${pokemonDetails.abilities
      .map((ability) => ability.ability.name)
      .join(", ")}`;
    document.getElementById(
      "modalStats"
    ).textContent = `Stats: ${pokemonDetails.stats
      .map((stat) => `${stat.stat.name}: ${stat.base_stat}`)
      .join(", ")}`;

    pokemonModal.show();
  }
};

// Load initial Pokémon data
loadPokemon(offset, limit);

// Event listener for search form
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const pokemonNameOrId = searchInput.value.trim();
  if (pokemonNameOrId) {
    searchPokemon(pokemonNameOrId);
  }
});

// Event listener for "View More" button
viewMoreButton.addEventListener("click", () => {
  offset += limit;
  loadPokemon(offset, limit);
});
