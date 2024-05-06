const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

// Catch-All Route
app.get("*", function (req, res) {
	res.sendFile(`${__dirname}/views/index.html`);
});

// 404 Route
app.use(function (req, res, next) {
	res.status(404).sendFile(`${__dirname}/views/404.html`);
});

// Listening for requests
const listener = app.listen(process.env.PORT || 3000, function () {
	console.log("Your app is listening on port " + listener.address().port);
});
