const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const router = require('./routes/routes');

class App 
{

	constructor(port = 5000) {
		this.port = process.env.PORT || port;

	}

	init() {
		app.use(BodyParser.urlencoded({extended:true}));
		app.use(BodyParser.json());
		app.use(router);

		app.listen(this.port,() => {
    	console.log("connecting"+this.port);
		})
		}
}

module.exports = App;