// List of Pokemon
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

// Listing Pokemon heights using loops
for (let i = 0; i < pokemonList.length; i++){
    // Adding conditional for height above 1.5
    if(pokemonList[i].height >= 1.5) {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - Wow, that is a BIG Pokemon!" + "<br>")
    }
    // Adding any others 
    else {
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m)" + "<br>")
    }
}
