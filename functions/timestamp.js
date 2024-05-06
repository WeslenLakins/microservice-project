exports.handler = async function (event) {
	let dateParam = event.queryStringParameters.dateParam || null;

	// Easter egg endpoint
	if (event.path === "/api/easteregg") {
		return {
			statusCode: 200,
			body: JSON.stringify({
				greeting: "Oh, you've found this! Well, congrats! :p",
			}),
		};
	}

	// Timestamp without parameter
	if (dateParam === null) {
		const date = new Date();
		return {
			statusCode: 200,
			body: JSON.stringify({ unix: date.valueOf(), utc: date.toUTCString() }),
		};
	}

	// Timestamp with parameter
	if (/^\d{5,}$/.test(dateParam)) {
		dateParam = parseInt(dateParam);
	}

	const date = new Date(dateParam);
	if (date.toString() === "Invalid Date") {
		return {
			statusCode: 400,
			body: JSON.stringify({ error: "Invalid Date" }),
		};
	} else {
		return {
			statusCode: 200,
			body: JSON.stringify({ unix: date.valueOf(), utc: date.toUTCString() }),
		};
	}
};
