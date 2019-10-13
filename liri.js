require("dotenv").config();
var fs = require("fs");
var axios = require("axios");
var keys = require("./key.js");
var moment = require("moment");
var spotify = require("node-spotify-api");
var newSpotify = new spotify(keys.spotify);

// Creates variables to take in user data.
var command = process.argv[2];
var query = process.argv[3];

// Creates switch statement to execute user requests.
switch (command) {
    case "concert-this":
        bandsAPI();
        console.log("concert-this is being executed");
        break;

    case "spotify-this-song":
        spotifyThis();
        console.log("spotify-this-song is being executed");
        break;

    case "movie-this":
        movieThis();
        console.log("movie-this is being executed");
        break;

    case "do-what-it-says":
        readRandom();
        console.log("do-what-it-says is being executed");
        break;

    default:
        console.log("no input");
}

// API call for Bands in Town (concert-this).
function bandsAPI() {
    axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // Once the get function has been executed, store the response data as a variable.
            var results = response.data;
            // Create a for-loop to loop over the results.
            for (var i = 0; i < results.length; i++) {
                // Print the results.
                console.log("The venue is: " + results[i].venue.name + ".");
                console.log("The location is: " + results[i].venue.city + ", " + results[i].venue.region + ", " + results[i].venue.country + ".");
                console.log("The date of the concert is: " + moment(results[i].datetime).format("MM/DD/YYYY"));
                console.log("------------");
            };
        })
        // Create an error response.
        .catch(function (error) {
            if (error.response) {
                console.log("------Data------");
                console.log(error.response.data);
                console.log("------Status----");
                console.log(error.response.status);
                console.log("------Status----");
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request)
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
};

// Function to populated undefined user entry with data.
function spotifyThis() {
    if (query === undefined) {
        query = "The Sign"
    };
    // API call for Spotify (spotify-this-song).
    function spotifyAPI() {
        newSpotify.search({
            type: "track",
            // Take in user query.
            query: query,
        }, function (err, data) {
            // Print song data.
            console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
            console.log("Song Name: " + data.tracks.items[0].name);
            console.log("Song Preview: " + data.tracks.items[0].external_urls.spotify);
            console.log("Album: " + data.tracks.items[0].album.name);
            // Create an error response.
            if (err) {
                return console.log("Error occurred: " + err);
            }
        });
    }
    spotifyAPI();
};

// Function to populate undefined user entry with data.
function movieThis() {
    if (query === undefined) {
        query = "Mr. Nobody"
    };
    // API call for OMDB (movie-this).
    function omdbAPI() {
        axios.get("https://www.omdbapi.com/?t=" + query + "&apikey=trilogy").then(
                function (response) {
                    // After get response, print movie data.
                    console.log("The title of movie is: " + response.data.Title);
                    console.log("The year of the movie is: " + response.data.Year);
                    console.log("The IMDB Rating of the movie is: " + response.data.Ratings[0].Value);
                    console.log("The Rotten Tomatoes Rating is: " + response.data.Ratings[1].Value);
                    console.log("The Country where the movie was produced is: " + response.data.Country);
                    console.log("The language of the movie is: " + response.data.Language);
                    console.log("The plot of movie is: " + response.data.Plot);
                    console.log("The Actors in the movie are: " + response.data.Actors);
                })
            // Create an error response.
            .catch(function (error) {
                if (error.response) {
                    console.log("------Data------");
                    console.log(error.response.data);
                    console.log("------Status----");
                    console.log(error.response.status);
                    console.log("------Status----");
                    console.log(error.response.headers);
                } else if (error.request) {
                    console.log(error.request)
                } else {
                    console.log("Error", error.message);
                }
                console.log(error.config);
            });
    };
    omdbAPI();
};

// Read function for random.txt.
function readRandom() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        // Create error message.
        if (error) {
            return console.log(error);
        }
        // Create array to store user input and split for easier handling.
        var dataArr = data.split(",");
        command = dataArr[0];
        query = dataArr[1];
        // Run function called by command and query.
        spotifyThis();
    });
};

fs.writeFile("random.txt", "movies-this,Finding Dory", function(error, data) {

  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error); 
  }
  var dataArr = data.split(",");
  command = dataArr[0];
  query = dataArr[1];
});


// writeRandom();