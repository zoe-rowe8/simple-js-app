// List of Pokemon
//Array of Pokemon is wrapped in an IIFE function
let pokemonRepository = (function() {

    // Array definition
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


//.push adds to the end of the array
function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon 
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
}

// Calling pokemonList
function getAll() {
    return pokemonList;
}

// Adding showDetails function for event listener
function showDetails(pokemon) {
        console.log(pokemon);
}

// Adding pokemonList as buttons with pokemon names
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

  // Adding loadList function
function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json();
    }).then(function (json) {
        json.results.forEach(function (item) {
            let pokemon = {
            name: item.name,
            detailsUrl: item.url
            };
            add(pokemon);
            console.log(pokemon);
        });
    }).catch(function (e) {
        console.error(e);
    })
}

// Adding loadDetails function
function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  //Adding showDetails function
  function showDetails(item) {
    loadDetails(item).then(function () 
    {
      console.log(item);
    });
}

//Adding return
return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
    };

})();


//Adding array to console log
console.log(pokemonRepository.getAll());

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
