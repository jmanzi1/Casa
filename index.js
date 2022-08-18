const Joi = require (`joi`);
const {response} = require("express");
const express = require("express");
const casa = express();
casa.use(express.json());

const movies = [{
    id: 1,
    name: "La Casa De Papel",
    creator: "Alex Pina",
    description:
      "A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police",
    flyer: "https://google.com",
    castCrews: [
      {
        Realname: "Álvaro Morte",
        alias: "The Proffessor",
        profilePic: "https://google.com",
      },
      {
        Realname: "Itziar Ituño",
        alias: "Lisbon",
        profilePic: "https://google.com",
      },
    ],
    Genre: "",
    yearProduced: "",
    composer: "hhdh",
    whereToWatch: [
      {
        url: "",
        image: "https://google.com",
      },
      {
        url: "",
        image: "https://google.com",
      },
    ],
    comments: [
      {
        user: "laundry123",
        comment: "This is Awesome",
      },
      {
          user: "JonanMJ",
          comment: "This is Awesome",
        },
    ],
    ratings: 1,
    watched: 299,
  },
  {
    id: 2,
    name: "Tomorrow",
    creator: "Alex Pina",
    description:
      "A criminal mastermind who goes by The Professor has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police",
    flyer: "https://google.com",
    castCrews: [
      {
        Realname: "Álvaro Morte",
        alias: "The Proffessor",
        profilePic: "https://google.com",
      },
      {
        Realname: "Itziar Ituño",
        alias: "Lisbon",
        profilePic: "https://google.com",
      },
    ],
    Genre: "",
    yearProduced: "",
    composer: "hhdh",
    whereToWatch: [
      {
        url: "",
        image: "https://google.com",
      },
      {
        url: "",
        image: "https://google.com",
      },
    ],
    comments: [
      {
        user: "laundry123",
        comment: "This is Awesome",
      },
      {
          user: "JonanMJ",
          comment: "This is Awesome",
        },
    ],
    ratings: 1,
    watched: 299,
  }
];
const port = process.env.PORT||9009; 
casa.listen(
    port,
    ()=> console.log(`Welcome to La Casa on http://localhost:/${port}`)
)
casa.get('/api/movies',(request,response)=>{
    response.send(movies);
})
casa.get('/',(request,response)=>{
    response.send('Welcome');
})

casa.get('/api/movies',(request,response)=>{
  // id, name, creator, and genre.
  const { id, name, creator, genre } = request.query;
  console.log('id', id);
  const searchedMovies = movies.filter((movie ) => movie.id === parseInt(id) || movie.name === name|| movie.creator===creator || movie.genre ===genre);
  response.send(searchedMovies);
});

casa.put('/api/movies/ratings',(request,response)=>{
  const{id, ratings} = request.query;

  if(!Number.isInteger(parseInt(id))){
    return response.status(400).send({
      status: 400,
      message: "ID SHOULD BE AN INTEGER"
    });
  }
  if(isNaN(ratings)){
    return response.status(400).send({
      status: 400,
      message: "RATING SHOULD BE A NUMBER"
    })
  }
  if(!+ratings>=0){
    return response.status(400).send({
      status: 400,
      message: "RATING SHOULD BE A POSITIVE NUMBER"
    });
  }
  console.log('id',id);
  let selectedMovie=movies.find(ratings=>ratings.id==parseInt(id));

  // get index of the movie with the id from the req.query
  const index = movies.indexOf(selectedMovie);
  console.log('ratings',selectedMovie);
  
  let newRate=(selectedMovie.ratings+ parseInt(ratings))/2;
  movies[index].ratings = newRate;
  response.send(movies);
})

casa.put('/api/movies/watched',(request,response)=>{
  const{id} = request.query;
  
  let numWatched = movies.find(watched=>watched.id == parseInt(id));

  console.log('watched',numWatched);
  const index = movies.indexOf(numWatched);
  let newWatched = (numWatched.watched + 1);
  movies[index].watched = newWatched;
   response.status(200).send(movies);
})

