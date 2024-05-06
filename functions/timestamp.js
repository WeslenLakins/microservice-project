const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

// Helper function to format a date in EST
function formatDateToEST(date) {
	return new Intl.DateTimeFormat("en-US", {
		timeZone: "America/New_York",
		hour12: false,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	}).format(date);
}

// Current timestamp endpoint
router.get("/timestamp", (req, res) => {
	const date = new Date();
	res.json({
		unix: date.valueOf(),
		utc: date.toUTCString(),
		est: formatDateToEST(date),
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
			est: formatDateToEST(date),
		});
	}
});

// Easter egg endpoint
router.get("/easteregg", (req, res) => {
	res.json({ greeting: "Oh, you've found this! Well, congrats! :p" });
});

app.use("/api", router);

module.exports.handler = serverless(app);
