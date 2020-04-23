// HTTP lab
// Documentation: https://pokeapi.co/docsv2/
// Endpoint: http://pokeapi.co/api/v2/pokemon/ - (Gets list of first 20 Pokemon)

// Objective
// Explore the PokeAPI documentation
// Using the API endpoint, make a GET request with ajax
// Print the response object to the console
// Render the first 20 pokemon to page using jQuery

// Stretch  Goals

// 1)
// Make a 'next' button which will handle making another GET request for the next 20 pokemon.
// Render the new response object to the page.
// This functionality should be able to cycle through and display all the pokemon, 20 at a time.

// 2)
// Make each individual pokemon clickable, such that when a user clicks them, 
// that specific pokemons information is rendered to the page
// Note: Each pokemon has two properties, name and url. The URL property is where you can request
// information specific to that pokemon.
// There is a lot of information for each pokemon, so feel free to pick and choose which properties to include on the page

// 3)
// Included a section for berries, items, moves, or any other miscellaneous data you wish to include

// 4)
// Style your page :)


// Waits for html document to load
$('document').ready(function() {
    let limit = 0;
    console.log('file loaded..');

    // Create header for app
    let headerPoke = "<h1>PokeAPI</h1>";
    $('#header-title-container').append(headerPoke);

    // Create a get more pokemon button
    let getMorePoke = "<button class='btn btn-primary' onclick='getMorePokemon()'>Get More Pokemons</button>";
    $('#nav').append(getMorePoke);

    // Create a pokemon container
    // let listOfPokemons = "<div class='col'></div>";
    // $('#body-pokemons').append(listOfPokemons);

    getInitialPokemon();
});

function getInitialPokemon() {

    var _pokemon;
    var _queryUrl = "http://pokeapi.co/api/v2/pokemon/";

    // Get request for pokemon data using ajax
    $.ajax({
        url: _queryUrl,
        method: "GET"
    })

    // .done waits for the response object from our ajax request
    .done(function(response) {
        _pokemon = response.results;
        console.log(_pokemon);

        appendItemsToPage(_pokemon);
    });
}

function getMorePokemon() {

    // Increase pokemon 'limit' - or how many I get back - by using the limit QUERY STRING
    
    let len = $("#body-pokemons").children().length;
    let limit = len + 20;

    var _newQueryUrl = "http://pokeapi.co/api/v2/pokemon/?limit=" + limit;

    // Get request for pokemon data using ajax
    $.ajax({
        url: _newQueryUrl,
        method: "GET"
    })

    .done(function(response) {
        let _pokemon = response.results;
        console.log(_pokemon);
        appendItemsToPage(_pokemon);
    });
}

// This is the event function to handle getting more info on a clicked pokemon
function getOnePokemon(event) {
    var url = event.data.url;

    $.ajax({

    })

    .done(function(response) {

    });
}

function appendItemsToPage(_pokemon) {
    
    $("#body-pokemons").empty();

    for (var i = 0; i < _pokemon.length; i++) {

        // Pokemon card
        $('#body-pokemons').append("<div id=itemPlus" + i + " class='card'></div>");

        // Pokemon name div
        $('#itemPlus' + i).append("<div id='name" + i + "'></div>");

        // Pokemon name
        $('#name' + i).append(_pokemon[i].name);

        // Putting together the pokemon card and appending to page


        // Add click event listener to each pokemon name


    }
}