const port = 8000;
const path = require('path');
const db_name = "multistream_db"; // Project's database name


// ============ Express ============
const express = require('express');
const app = express();


// ============ Session ============
const session = require('express-session');
app.use(session({
    secret: 'sdfghfgsfdafg',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 30 } // maxAge is in milliseconds
}));


// ============ Body Parser ============
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ============ Start Server ============
const server = app.listen(port, () => {
    console.log("---> listening on port " + port);
});


// ============ Socket ============
const io = require('socket.io')(server);


// ============ Mongoose ============
const mongoose = require('./server/config/mongoose.js')(db_name);


// ============ Flash Messages ============
const flash = require('express-flash');
app.use(flash());


// ============ Angular twitch  ============
// var angularTwitch = require('angular-twitch');


// ============ Models ============
require('./server/models/multi.model');


// ============ Static Routes ============
app.use(express.static( __dirname + '/public/dist/public'));


// ============ Routes ============
require('./server/config/routes')(app);


// this route will be triggered if any of the routes above did not match
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

// Twitch secret #
//np47uxj5suwbnf6r5jddweo00gjfam



//paletton link
// http://paletton.com/#uid=54I050koZ7f8XnogSc3CP2n++00