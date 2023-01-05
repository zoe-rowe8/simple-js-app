// List of Pokemon
// Array of Pokemon is wrapped in an IIFE function

let pokemonRepository = (function () {

    // Array definition
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    let pokemonListElement = $('.pokemon-list');

// .push adds to the end of the array
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

// Adding pokemonList as buttons with pokemon names
function addListItem(pokemon) {
    let listItem = $('<li class="list-group-item"></li>');
    let button = $('<button class="pokemon-button btn btn-warning" data-target="#pokemon-modal" data-toggle="modal">' + pokemon.name +  '</button>');
    listItem.append(button);
    pokemonListElement.append(listItem);  
    button.on('click', function() {
        showDetails(pokemon);
    });
}

// Adding loadList function
function loadList() {
    return fetch(apiUrl).then(function (response) {
        return response.json();
    }).then (function (json) {
        json.results.forEach(function (item) {
            let pokemon = {
                name: item.name,
                detailsUrl: item.url,
            };
            add(pokemon);
        });
    }).catch(function (e) {
        console.error(e);
    });
}

// Adding loadDetails function
function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types.map((type) => type.type.name);
        item.abilities = details.abilities.map((abilities) => abilities.ability.name);
    }).catch(function (e) {
        console.error(e);
    });
}

// Adding showDetails function
function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
        showDetailsModal(pokemon);
    });
}

// Adding Modal

function showDetailsModal(pokemon) {
    let modalBody = $('.modal-body');
    let modalTitle = $('.modal-title');

    modalBody.empty();
    modalTitle.text(pokemon.name);

    let height = $('<p>' + 'Height:  ' + pokemon.height + '</p>');
    let image = $('<img class="pokemon-img" src="' + pokemon.imageUrl + '" />');
    let types = $('<p>' + 'Types:  ' + pokemon.types + '</p>');
    let abilities = $('<p>' + 'Abilities: ' + pokemon.abilities + '</p>');

    modalBody.append(image);
    modalBody.append(height);
    modalBody.append(types);
    modalBody.append(abilities);
}

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
};
})();
    
    
    pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});