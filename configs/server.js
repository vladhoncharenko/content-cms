let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let http = require('http').Server(app);
let path = require('path');
let Content = require('../app/models/content-schema');
let configDB = require('../configs/mongo-db-config');
let cookieParser = require('cookie-parser');
let session = require('express-session');
let fs = require('fs');

mongoose.connect(configDB.url, {
    socketTimeoutMS: 0,
    keepAlive: true,
    reconnectTries: 30
});
mongoose.Promise = global.Promise;
app.use(session({
    secret: 'ewfr43tregfwqdeq3fwq',
    resave: true,
    saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.set('port', (process.env.PORT || 8080));
app.use('/', express.static(path.join(__dirname, '../app/')));

require('../routes/api-routes.js')(app, Content, fs);

http.listen(app.get('port'), function () {
    console.log('listening on *:' + app.get('port'));
});