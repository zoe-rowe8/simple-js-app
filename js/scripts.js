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
    pokemonList.push(pokemon);
}

function getAll() {
    return pokemonList;
}

return {
    add: add,
    getAll: getAll
};

})();

// Adding an extra Pokemon
pokemonRepository.add({
    name: "Oddish",
    height: 0.5,
    abilities: ['Poison', 'Grass']
  })

  //Adding Array to console log
  console.log(pokemonRepository.getAll())

  // Print list of Pokemon with their heights in the HTML file. 
  // If height is equal to or larger than 1.5 add comment 'Wow, that is a BIG Pokemon!'
function printList(pokemon) {
    if (pokemon.height >= 1.5) {
        document.write('<h2>' + pokemon.name + '</h2><p> height: ' + pokemon.height + ' m</p><p>Wow, that is a BIG Pokemon!</p>');
    } else {
        document.write('<h2>' + pokemon.name + '</h2><p> height: ' + pokemon.height + ' m</p>');
    }
}

//  Calling the forEach method to run printList for every array item of the pokemonList array.
pokemonRepository.getAll().forEach(printList);