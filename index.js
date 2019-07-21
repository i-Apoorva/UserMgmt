let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
var cors = require('cors');
let path= require('path');
const logger = require('morgan');
app.use(cors());
const router = express.Router();
var port = process.env.PORT || 8000; 
app.get('/', (req, res) => res.send('Hello World with Express'));
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
     extended: false
  }));
app.use(bodyParser.json());
app.use(logger('dev'));

 let db_url= "mongodb+srv://test:test@cluster0-ftigl.mongodb.net/test?retryWrites=true&w=majority";
 let mongoDB = process.env.MONGODB_URI || db_url;
 mongoose.connect(mongoDB, {useNewUrlParser: true});
 mongoose.Promise = global.Promise;
 var db = mongoose.connection;
 db.once('open', () => console.log('connected to the database'));
 db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', function (req, res) {
   console.log('Peace');
   res.send('yayyyyyy');
 });
   
// Import routes

//app.use(express.static(path.join(__dirname, "client/public")));
//app.get("/", function(req, res) {
  // res.sendFile(path.join(__dirname, "client/public", "index.html"));
 //});

// Use Api routes in the App
let apiRoutes = require("./api-routes");
app.use('/api', apiRoutes);

// Launch app to listen to specified port
app.listen(port, function () {
   console.log("Running application on port " + port);
});