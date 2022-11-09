const express = require('express');
const DBconfig = require(__dirname + '/config/database.js');
const connect = DBconfig.init();
const bodyParser = require("body-parser");

DBconfig.connect(connect);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) =>{
    res.json({ test : "test"});
});

require("./router/user.js")(app);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), "빈 포트에서 대기");
});