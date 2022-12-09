// List of Pokemon
// Array of Pokemon is wrapped in an IIFE function

let pokemonRepository = (function () {

    // Array definition
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let pokemonListElement = document.querySelector('.pokemon-list');

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
};

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
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types.map((type) => type.type.name).join(',');
    }).catch(function (e) {
    console.error(e);
    });
}

// Adding showDetails function
function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
    showModal(pokemon);
    //console.log(item);
    });
};

// Adding Modal

function showModal(pokemon) {
let modalContainer = document.querySelector('.modal-container');  
modalContainer.innerText = '';

let modal = document.createElement('div');
modal.classList.add('modal');

let title = document.createElement('h1');
title.innerText = pokemon.name;

let pokemonImage = document.createElement('img');
pokemonImage.src = pokemon.imageUrl;

let pokemonHeight = document.createElement('p');
pokemonHeight.innerText = "Height: " + pokemon.height;

let pokemonTypes = document.createElement('p');
pokemonTypes.innerText = "Type: " + pokemon.types;

modal.appendChild(title);  
modal.appendChild(pokemonImage);
modal.appendChild(pokemonHeight);
modal.appendChild(pokemonTypes);
modalContainer.appendChild(modal);
    
modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
        hideModal();
    }
})

modalContainer.classList.add('is-visible');
}

function hideModal() {
    let modalContainer = document.querySelector('.modal-container');
    modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
    let modalContainer = document.querySelector('.modal-container');
    if(e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
    }
});
    
    
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails
    };
    })();
    
    
    pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});