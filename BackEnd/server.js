const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser') //declare middleware body parser
const mongoose = require('mongoose'); // mongoose declared

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//added cors to be able to make cross origin requests, security reasons
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

//link to connect mongodb
const connectionString= 'mongodb+srv://admin:admin1@cluster0.e93y3.mongodb.net/movies?retryWrites=true&w=majority';
mongoose.connect(connectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema;

//define schema for database, how db looks like
var movieSchema = new Schema({
  title:String,
  year:String,
  poster:String

});

//when we interact with db we just refer to MovieModel
var MovieModel = mongoose.model("movie", movieSchema);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//get request which returns the movie array at localhost:4000
app.get('/api/movies',(req,res)=>{

    // const myMovies = [
    //     {
    //     "Title":"Avengers: Infinity War",
    //     "Year":"2018",
    //     "imdbID":"tt4154756",
    //     "Type":"movie",
    //     "Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //     "Title":"Captain America: Civil War",
    //     "Year":"2016",
    //     "imdbID":"tt3498820",
    //     "Type":"movie",
    //     "Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     },
    //     {
    //     "Title":"World War Z",
    //     "Year":"2013",
    //     "imdbID":"tt0816711",
    //     "Type":"movie",
    //     "Poster":"https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"}
    //     ,{
    //     "Title":"War of the Worlds",
    //     "Year":"2005",
    //     "imdbID":"tt0407304",
    //     "Type":"movie",
    //     "Poster":"https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    //     }
    //     ]
        
//callback function, finds all records in db
  MovieModel.find((err,data)=>{

    res.json(data);
  })

    // res.json({
    //     //pass  array into object
    //     mymovies:myMovies

    // });
})

//listnes for get request at specified url and returns movie if ID matches
app.get('/api/movies/:id',(req,res)=>{
      console.log(req.params.id);

      MovieModel.findById(req.params.id,(err,data)=>{
        res.json(data)
      })
})



//listens for the post request and pulls title,year and poster data
app.post('/api/movies',(req,res)=>{
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);
    res.send('Data Received');

    MovieModel.create({
      title:req.body.Title,
      year:req.body.Year,
      poster:req.body.Poster

    })

    //we didnt send the confirmation that we created the movie,
    //client tried to send it again
    //we have to send a response that movie has been added
    res.send('Movie Added.')
})

//listens at the specific port, in this case its 4000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})