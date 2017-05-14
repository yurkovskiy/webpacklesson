"use strict";

export default function(message) {

	if (NODE_ENV == "development") {
		console.log(message);
	}

	console.log("just for debugging");


	window.alert(`Welcome here: the message: ${message}`);
};