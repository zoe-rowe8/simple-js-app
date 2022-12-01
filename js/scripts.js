// List of Pokemon
let pokemonRepository =(function () {
    let pokemonList =[

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

function getAll () {
    return pokemonList;
}

pokemonRepository.add({
    name: "Oddish",
    height: 0.5,
    abilities: ['Poison', 'Grass']
  })

//Adding forEach functions

pokemonRepository.getAll().forEach(function(pokemon){
    if(pokemon.height > 1.5){
        document.write(pokemon.name + ' (height: '+ pokemon.height + ') - Wow, that is a BIG Pokemon!' + '<br>')
    }

    else {
        document.write(pokemon.name + ' (height: '+ pokemon.height+ ') <br>')
}
})})

// Just incase - will delete later
// Listing Pokemon heights using loops
// for (let i = 0; i < pokemonList.length; i++){
 //    Adding conditional for height above 1.5
 //   if(pokemonList[i].height >= 1.5) {
 //       document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m) - Wow, that is a BIG Pokemon!" + "<br>")
 //   }
 //    Adding any others 
 //   else {
  //      document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + " m)" + "<br>")
 //   }
//}
