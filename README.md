# Pokedex-App
Welcome to the Pokedex App! This project is an interactive application that allows users to explore detailed information about various Pokémon. Built with HTML, JavaScript, and Bootstrap, this app is responsive and visually appealing, designed to provide a seamless user experience across different devices.

## Table of Contents
- Features 
- Usage
- Code Structure
- Contributing
- License
### Features
- **Search Functionality**: Users can search for Pokémon by name or number.
- **Pokemon List**: Displays a list of Pokémon with their names, images, and types.
- **Detailed View**: Clicking on a Pokémon card displays a modal with detailed information including abilities and stats.
-**Responsive Design**: The app is fully responsive, ensuring a great user experience on desktops, tablets, and mobile devices.
- **Load More Function**: Users can load more Pokémon by clicking the "Load More Pokemon" button.

## Usage
- **Search for Pokémon**: Use the search bar to find Pokémon by name or number. The app will display the Pokémon that matches the search query.
- **View Pokémon Details**: Click on any Pokémon card to open a modal displaying detailed information about that Pokémon.
- **Load More Pokémon**: Click the "Load More Pokemon" button to fetch and display additional Pokémon.
  
## Code Structure
The codebase is organized as follows:

- **index.html**: The main HTML file containing the structure of the app.
- **scss/styles.scss**: The main SASS file for styling the app.
- **js/main.js**: The main JavaScript file containing the logic for fetching and displaying Pokémon data.
- **package.json**: Contains the project dependencies and scripts.
- **README.md**: This file, provides an overview of the project.
#### JavaScript Breakdown
- **fetchPokemon**: Fetches a list of Pokémon from the PokeAPI.
- **fetchPokemonDetails**: Fetches detailed information about a specific Pokémon.
- **fetchPokemonByNameOrId**: Fetches Pokémon details by name or ID.
- **createPokemonCard**: Creates a card element for a Pokémon and adds it to the DOM.
- **loadPokemon**: Loads and displays a list of Pokémon.
- **searchPokemon**: Searches for a Pokémon by name or ID and displays the result.
- **showPokemonDetails**: Displays detailed information about a Pokémon in a modal.
#### HTML Structure
- **Header**: Contains the navigation bar and search form.
- **Main Container**: Holds the Pokémon cards and the "Load More Pokemon" button.
- **Modal**: Used to display detailed information about a Pokémon when a card is clicked.
  
## Contributing
Contributions are welcome! let's make coding interesting

## License
This project is licensed under the MIT License.
