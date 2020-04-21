// Hypertext Transfer Protocal. -- for sending and recieving information across the web!

// TYPES OF HTTP REQUEST
// POST         (CREATE)
// GET          (READ)
// PUT          (UPDATE)
// DELETE       (DELETE)

// // Examples of APIs...
// http://api.open-notify.org/
// https://pokeapi.co/
// http://pokeapi.co/api/v2/pokemon


$('document').ready(function() {
    
    let _numberOfPeople;
    let _peopleArrray;

    let queryUrl = "http://api.open-notify.org/astros.json";


    $.ajax({
        url: queryUrl,
        method: "GET"
    })
    .done((response) => {
        console.log(response);

        _numberOfPeople = response.number;
        _peopleArray = response.people;

        console.log("Number of people in space: " + _numberOfPeople);
        console.log("People in space: " + _peopleArray);

        appendItemsToPage(_numberOfPeople, _peopleArray);
    });

    const appendItemsToPage = () => {

        //Header
        let numberOfHeading = "<h1>Number of People in Space: " + _numberOfPeople + "<h1>";
        $('#header-title-container').append(numberOfHeading);

        //People Cards
        for (let i = 0; i < _peopleArray.length; i++) {
            var peopleCard = "<div id=peopleCard" + i + " class=col-md-3></div>";
            var peoplesContent = "<div class=peopleContent" + i + "></div>";

            var nameContent = "<div id=name" + i + "></div>";
            var nameHeader = "<h5> Name: </h5>";
            var name = "<span>" + _peopleArray[i].name + "</span>";

            var craftContent = "<div id=craft" + i + "></div>";
            var craftHeader = "<h5> Craft: </h5>";
            var craft = "<span>" + _peopleArray[i].craft + "</span>";

            $('#peopleInSpace').append(peopleCard);
            $('#peopleCard' + i).append(peoplesContent);

            $('.peopleContent' + i).append(nameContent);

            $('#name' + i).append(nameHeader);
            $('#name' + i).append(name);

            $('.peopleContent' + i).append(craftContent);
            $('#craft' + i).append(craftHeader);
            $('#craft' + i).append(craft);

            $('#peopleCard' + i).addClass('peopleCard');
            $('#name' + i).addClass('name');
            $('#craft' + i).addClass('craft');
        }
    }
});


