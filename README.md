# LIRI Node App
LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command-line node app that takes in parameters and gives back data.  LIRI will search for concerts, movies, music, and run a random.txt file which generates calls for concerts, movies, and music.

## App Organization
LIRI is made to run four commands: `concert-this`, which will print all concert venues for a particular band; `spotify-this-song`, which will print the name, album, artist, and a link to the song in Spotify; `movie-this`, which will print a catalogue of information for any movie selected; and `do-what-it-says`, which will run the command in a text file called `random.txt`.

## Instructions for Use
1. In order to run LIRI, you will first need to create a `.env` file, as well as obtain and replace API keys for `spotify`, `bands`, and `movies`.  You will replace the `spotify` keys in the `.env` file, and replace the other two within the `liri.js` file's API calls.

2. The app is designed to run through the commands in any order.  To get a list of venues, including locations and date/time, for a particular artist, simply enter `node liri.js concert-this <band name>` in the command line.  This will search the Bands In Town API.  See video below for demonstration.

3. To get the details of a movie, including title, year released, IMDB rating, Rotten Tomatoes rating, country of production, language, plot, and principal actors, enter `node liri.js movie-this <movie name>` in the command line.  It is also possible to run the command without a movie specified - if this is done, then the results will populate with Keanu Reeve's "Mr. Nobody".  See video below for demonstration.

4. To get the details of a song, including artist, title, album, and link to the song in Spotify, enter `node liri.js spotify-this-song <song name>` in the command line.  It is also possible to run the command without a song specified - if this is done, then the results will populate with Harry Styles' "Sign of the Times".  See video below for demonstration.

5. Lastly, to run the details of the `random.txt` file, enter `node liri.js do-what-it says`.  This will run the already-existing command in the file, which is to provide the Spotify details for the song "I Want It That Way", by the Backstreet Boys.

## Video Demonstration

<a href="video-demonstration.mp4">Video Demonstration</a>

## Deployed Version of App

<a href="https://katealaney.github.io/liri-node-app/">https://katealaney.github.io/liri-node-app/</a>

## Technologies Used
1. JavaScript
2. Node.js