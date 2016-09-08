let express = require('express');
let technologger = require('technologger');
let parser = require('body-parser');
let app = express();

if (emailArr === undefined) var emailArr = {};

app.use('/', express.static('public'));

app.use(parser.json());
app.use(technologger);

app.post('/users', (req, res, body) => {
    console.log(req.body);

    // TODO: вернуть количество обращений

    if (emailArr[req.body.email]) {
	emailArr[req.body.email] += 1;

    }
    else {
	emailArr[req.body.email] = 1;
    }	

    res.send(String(emailArr[req.body.email]));
    //res.send(registrNum(emailArr[req.body.email]));
    
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`App started on port ${process.env.PORT || 3000}`);
});

/*function registrNum(number) {
    if (number) {
	number += 1;

    }
    else {
	number = 0;
    }	
    return String(number);
}*/

