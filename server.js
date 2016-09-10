let express = require("express");
let technologger = require("technologger");
let parser = require("body-parser");
let app = express();

var emailArr = {};

app.use("/", express.static("public"));

app.use(parser.json());
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
