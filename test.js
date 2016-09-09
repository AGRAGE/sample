let assert = require("assert");

let plural = require("./public/main").plural;
let pluralize = require("./public/main").pluralize;
let hello = require("./public/main").hello;

assert.equal(hello("Test", 6), "Привет, Test! Вы авторизировались у нас уже 6 раз!");

assert.equal(plural(0), "раз");
assert.equal(plural(1), "раз");
assert.equal(plural(2), "раза");
assert.equal(plural(13), "раз");
assert.equal(plural(15), "раз");
assert.equal(plural(100), "раз");

assert.equal(pluralize("eng",["time", "times"], 1), "time");
assert.equal(pluralize("eng",["time", "times"], 2), "times");

