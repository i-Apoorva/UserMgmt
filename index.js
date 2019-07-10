let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();

// static redirect for jquery and bootstrap
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect to bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS for jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); //redirect to css bootstrap
// Setup server port
var port = process.env.PORT || 8000;
// Send message for default URL
//app.get('/', (req, res) => res.send('Hello World with Express'));
// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running application on port " + port);
});

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
     extended: false
  }));
  app.use(bodyParser.json());

  app.use(express.static('public'));
  app.set('views', './views');
  app.set('view engine', 'pug');

  let db_url= "mongodb+srv://test:test@cluster0-ftigl.mongodb.net/test?retryWrites=true&w=majority";
  let mongoDB = process.env.MONGODB_URI || db_url;
  // Connect to Mongoose and set connection variable
  mongoose.connect(mongoDB, {useNewUrlParser: true});
  mongoose.Promise = global.Promise;
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  app.get('/', function (req, res) {
     res.render('index', { title: 'Hey', message: 'Hello there!' })
   })

// Import routes
let apiRoutes = require("./api-routes")
// Use Api routes in the App

app.use('/api', apiRoutes)
