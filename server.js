var minimist = require("minimist");
var express = require("express");
var roll = require("./lib/roll.js");


var args = minimist(process.argv.slice(2));
var port = 5000;
if(args.port){ port = args.port; }

const app = express();

app.get('/app/', (req, res) => {
    res.status(200).send("200 OK");
})

app.get('/app/roll/', (req, res) => {
    var sides = 6;
    var dice = 2;
    var rolls = 1;
    if(req.params.sides){ sides = req.params.sides; }
    if(req.params.dice){ dice = req.params.dice; }
    if(req.params.rolls){ rolls = req.params.rolls; }
    res.status(200).send(roll(sides, dice, rolls));
})

app.get('/app/roll/:sides', (req, res) => {
    if(req.params.sides[0] != '{'){
        var dice = 2;
        var rolls = 1;
        res.status(200).send(roll(req.params.sides, dice, rolls));
    } else {
        var args = JSON.parse(req.params.sides);
        var sides = 6;
        var dice = 2;
        var rolls = 1;
        if(args.sides){ sides = args.sides; }
        if(args.dice){ dice = args.dice; }
        if(args.rolls){ rolls = args.rolls; }
        res.status(200).send(roll(sides, dice, rolls));
    }
})

app.get('/app/roll/:sides/:dice', (req, res) => {
    var rolls = 1;
    res.status(200).send(roll(req.params.sides, req.params.dice, rolls));
})

app.get('/app/roll/:sides/:dice/:rolls', (req, res) => {
    res.status(200).send(roll(req.params.sides, req.params.dice, req.params.rolls));
})

app.get('*', (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

app.listen(port, () => {
    
})