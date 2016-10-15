// Code goes here


function myFunc(search) {
  
  $('#contents').html('');
  
  var searchText = document.getElementById("search").value;
  
  // Using the core $.ajax() method
  $.ajax({

      // The URL for the request
      url: "https://en.wikipedia.org/w/api.php",

      // The data to send (will be converted to a query string)
      data: {
        action: 'opensearch',
        search: searchText,
        format: 'json'
      },

      // Whether this is a POST or GET request
      type: "GET",

      // The type of data we expect back
      dataType: "jsonp",
    })
    // Code to run if the request succeeds (is done);
    // The response is passed to the function
    .done(function(json) {

      if (json[1] === undefined) {

        $('#contents').text('You have to type something!');

      } else if (json[1].length === 0) {

        $('#contents').text('No results, sorry');

      } else {
        for (var i = 0; i < json[1].length; i++) {
          $('#contents').append('<a class="resultLink" href="' + json[3][i] + '"target="_blank">' + '<div class="result"><h3>' + json[1][i] + '</h3>' + json[2][i] + '</div></a>');
        }
      }



    })
    // Code to run if the request fails; the raw request and
    // status codes are passed to the function
    .fail(function(xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
    })
}