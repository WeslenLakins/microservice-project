const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

// Routing
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Catch-all route to handle client-side routing
app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

// No matching API route
app.use(function (req, res, next) {
	res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});

// Listening for requests
const listener = app.listen(process.env.PORT || 3000, function () {
	console.log("Your app is listening on port " + listener.address().port);
});
