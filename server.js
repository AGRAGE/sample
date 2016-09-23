let express = require("express");
let technologger = require("technologger");
let parser = require("body-parser");
let app = express();

var emailArr = {};

let technolibs = require('technolibs');

app.use('/', express.static('public'));
technoDoc.generate(require('./api'), 'public');

app.use(parser.json());
app.use('/libs', express.static('node_modules'));

app.post('/api/messages', (req, res) => {
	technolibs.publish(req.body).then(body => res.json(req.body));
});

app.get('/api/messages', function (req, res) {
	res.send([
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message')),
		technoDoc.mock(require('./api/scheme/Message'))
	])
});

app.use(technologger);

app.post("/users", (req, res, body) => {
    console.log(req.body);

    // TODO: вернуть количество обращений
    userEmail = req.body.email;

    if (emailArr[userEmail]) {
	emailArr[userEmail] += 1;

    }
    else {
	emailArr[userEmail] = 1;
    }

    numOfVisits = emailArr[userEmail] ;

    res.send(numOfVisits.toString());

});


app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});

if(typeof exports === "object"){

}
