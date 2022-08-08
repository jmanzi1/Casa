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
const port = process.env.PORT||3000; 
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
// app.get('/api/courses',(request,response)=>{                //http://localhost:8080/api/courses
//     response.send(courses);
// })
// app.post('/api/courses', (request, response) =>{            //postman
//     const { error } = validateCourse(request.body);

//     if( error )return response.status(400).send(result.error.details[0].message);
       
//     const course ={
//             id: courses.length +1,
//             name: request.body.name     
//     }
//     courses.push(course);
//     response.send(courses);
// })