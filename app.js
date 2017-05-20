const express = require("express");
const app = express();

const countriesRoutes = require("./router/countries.js");

app.set("view engine", "ejs");
app.use(express.static("assets"));

app.use("/countries", countriesRoutes);

// app.get("/ejs", function(req, res) {
// 	res.render("", {
// 		ifEjs: true,
// 		list: ["list", "of", "things"],
// 	});
// });
//
// function renderTemplate(res, page, title, pageArgs) {
// 	return res.render("template", {
// 		page: page,
// 		title: title,
// 		pageArgs: pageArgs,
// 	});
// }
//
// app.get(("/"), function(req, res) {
// 	renderTemplate(res, "home", "Homepage", {
// 		links: [{
// 			text: "Projects",
// 			href: "/projects",
// 		}, {
// 			text: "About",
// 			href: "/about",
// 	}],
// });
// });
//
// app.get("/about", function(req, res) {
// 	renderTemplate(res, "about", "About", {
// 		picture: "images/chris.jpeg",
// 		linkedin: "Chris Caraway",
// });
// });
//
// app.get("/projects", function(req, res) {
// 	renderTemplate(res, "projects", "Projects", {
// 		github: "Chris Caraway",
// });
// });

app.get("/countries:code", function(req, res) {
	var country = countries[req.params.code];
	res.render("template", {
		page: "page/countries.ejs",
		data: country,
	});
	if (!country) {
		res.status(404);
		return res.send("Country doesn't exist");
	}
	res.render("admin");
});

app.get("*", function(req, res) {
	res.send('<img src="">');
});


app.listen(3000, function() {
	console.log("Your server is available at http://localhost:3000!");
});
