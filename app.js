const express = require("express");
const app = express();


app.set("view engine", "ejs");
// app.use(static("assets"));

app.get("/ejs", function(req, res) {
	res.render("", {
		ifEjs: true,
		list: ["list", "of", "things"],
	});
});

function renderTemplate(res, page, title, pageArgs) {
	return res.render("template", {
		page: page,
		title: title,
		pageArgs: pageArgs,
	});
}

app.get(("/"), function(req, res) {
	renderTemplate(res, "home", "Homepage", {
		links: [{
			text: "EJS Example",
			href: "/ejs",
		}, {
			text: "About",
			href: "/about",
	}],
});
});

app.get("/about", function(req, res) {
	renderTemplate(res, "about", "About", {
		picture: "images/chris.jpeg",
		linkedin: "Chris Caraway",
});
});


app.get("/chriscaraway", function(req, res) {
	console.log("Chris Caraway Hompepage");
	res.render("chriscaraway");
});

//
// app.get("/about", function(req, res) {
// 	renderTemplate(res, "about", "About", {
// 	picture: " ",
// 	linkedin: "ChrisCaraway",
// });




app.listen(3000, function() {
	console.log("Your server is available at http://localhost:3000!");
});
