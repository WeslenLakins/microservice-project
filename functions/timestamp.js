const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

// Current timestamp or specific date timestamp endpoint
router.get("/timestamp/:dateParam?", (req, res) => {
	const { dateParam } = req.params;
	let date;

	if (!dateParam) {
		// If no date parameter, use current date
		date = new Date();
	} else if (/^\d+$/.test(dateParam)) {
		// If date parameter is a Unix timestamp
		date = new Date(parseInt(dateParam));
	} else {
		// If date parameter is a valid date string
		date = new Date(dateParam);
	}

	// If date is invalid
	if (isNaN(date.getTime())) {
		res.json({ error: "Invalid Date" });
	} else {
		res.json({
			unix: date.getTime(),
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
