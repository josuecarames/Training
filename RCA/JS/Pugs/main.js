// Event listener for our pug-button
let sendPugs = document.getElementById('send-pugs');

sendPugs.addEventListener('click', function(event) {

  // Store the giphy API URL for a random pug image into a variable "http://api.giphy.com/v1/gifs/random?api_key=60abc977b55a4107a9d4e9d1a769a826&tag=pugs"
  let queryURL = "http://api.giphy.com/v1/gifs/random?api_key=60abc977b55a4107a9d4e9d1a769a826&tag=pugs";

  // Perform an AJAX GET request to the variable storing the giphy url
  $.ajax({
    url: queryURL,
    method: "GET"
  })

  // function for after the data from the AJAX request comes back
 .done(function(response) {
    // console log the response to see the response object
    console.log(response);
    // Save the image_original_url property into a variable
    let imageUrl = response.data.image_original_url;
    console.log(imageUrl);

    // Create and store an image tag into a variable using createElement
    let pugImage = document.createElement('img');

    // Set the pugImage src attribute to imageUrl
    pugImage.setAttribute("src", imageUrl);
    pugImage.setAttribute("alt", "Pugs are here!");
    pugImage.setAttribute("height", "200px");
    pugImage.setAttribute("width", "20%");

    // Set the pugImage height attribute to 200pixels

    // Set the pugImage width attribute to 20%;

    // Prepend the pugImage to the images div
    let images = document.getElementById('images');
    images.prepend(pugImage);

  });

});

// Add an event listener function for the remove-pugs button
let removePugs = document.getElementById('remove-pugs');

removePugs.addEventListener('click', () => {
  images.removeChild(images.lastElementChild);
});


// Remove only the last image/gif (furthest one down)
