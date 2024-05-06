const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

// Helper function to format a date in GMT
function formatDateToGMT(date) {
	return date.toUTCString();
}

// Helper function to format a date in EST
function formatDateToEST(date) {
	return new Intl.DateTimeFormat("en-US", {
		timeZone: "America/New_York",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	}).format(date);
}

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
			utc: formatDateToGMT(date),
			est: formatDateToEST(date),
		});
	}
});

// Easter egg endpoint
router.get("/easteregg", (req, res) => {
	res.json({ greeting: "Oh, you've found this! Well, congrats! :p" });
});

// Handle all routes starting with "/api"
app.use("/api", router);

module.exports.handler = serverless(app);
