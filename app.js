const express = require("express");
const app = express();


app.set("view engine", "ejs");
// app.use(static("assets"));


// app.get("/ejs", function(req, res) {
// 	res.render("", {
// 		ifEjs: true,
// 		list: ["list", "of", "things"],
// 	});
// });

app.get("/chriscaraway", function(req, res) {
	console.log("Chris Caraway Hompepage");
	res.render("chriscaraway");
});


app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
