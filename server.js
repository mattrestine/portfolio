// Setup
var express        = require('express'),
    mongoose       = require('mongoose'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override');
// Mongoose/DB
mongoose.connect('mongodb://localhost/ptfo');
mongoose.Promise = global.Promise;
// Variables
var app = express();
// Set and Use
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.set('view engine','ejs');
// Routes
app.get('/', function(req, res) {
    res.render('index');
});
app.get('*', function(req, res) {
    res.redirect('/');
});
// Server
var port = '8008',
    host = 'localhost';
app.listen(port, host, () => console.log(`Server is running on ${host}:${port}`));