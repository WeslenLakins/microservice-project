const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

// Current timestamp endpoint
router.get("/timestamp", (req, res) => {
	const date = new Date();
	res.json({
		unix: date.valueOf(),
		utc: date.toUTCString(),
	});
});

// Specific date timestamp endpoint
router.get("/timestamp/:dateParam", (req, res) => {
	let dateParam = req.params.dateParam;
	if (/^\d{5,}$/.test(dateParam)) {
		dateParam = parseInt(dateParam);
	}
	const date = new Date(dateParam);
	if (date.toString() === "Invalid Date") {
		res.json({ error: "Invalid Date" });
	} else {
		res.json({
			unix: date.valueOf(),
			utc: date.toUTCString(),
		});
	}
});

// Easter egg endpoint
router.get("/easteregg", (req, res) => {
	res.json({ greeting: "Oh, you've found this! Well, congrats! :p" });
});

app.use("/api", router);

module.exports.handler = serverless(app);
