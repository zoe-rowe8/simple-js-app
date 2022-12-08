// List of Pokemon
//Array of Pokemon is wrapped in an IIFE function
let pokemonRepository = (function() {

    // Array definition
    let pokemonList = [

    {
        name: 'Pikachu',
        height: 0.4,
        type: ['Electric']
    },
    {
        name: 'Squirtle',
        height: 0.5,
        type: ['Water']
    },
    {
        name: 'Charmander',
        height: 0.6,
        type: ['Fire']
    },
    {
        name: 'Pidgey',
        height: 0.3,
        type: ['Flying', 'Normal']
    },
    {
        name: 'Persian',
        height: 1,
        type: ['Normal']
    },
    {
        name: 'Charizard',
        height: 1.7,
        type: ['Fire', 'Flying']
    },
    {
        name:'Jigglypuff',
        height: 0.5,
        type: ['Fairy', 'Normal']
    }
];


//.push adds to the end of the array
function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
}

// Adding GetAll function
function getAll() {
    return pokemonList;
}

// Adding showDetails function for event listener
function showDetails(pokemon) {
        console.log(pokemon);
}

// Adding addListItem function
function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listpokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener("click", function(event) {
        showDetails(pokemon);
    });
  }

return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
};

})();


//Adding array to console log
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);

    });

