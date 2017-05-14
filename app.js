const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("Title", function(req, res) {
	console.log("Serving up file");
	res.render("Title");
});

app.get("AboutMe", function(req, res) {
	res.render("About Me");
});

app.get("Photos", function(req, res) {
	res.render("Photos");
});

app.get("WorkSamples", function(req, res) {
	res.render("Work Samples");
});






app.listen(3000, function() {
	console.log("Your server is available at http://localhost:3000!");
});
