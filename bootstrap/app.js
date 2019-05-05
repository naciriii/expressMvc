const express = require('express')
const app = express()
const BodyParser = require('body-parser')
const PostRoutes = require(__basedir+'/routes/routes')
const AuthMiddleware = require(__basedir+'/Middlewares/AuthMiddleware')


class App 
{

	constructor(port = 5000) {
		this.port = process.env.PORT || port

	}

	init() {
		app.use(BodyParser.urlencoded({extended:true}))
		app.use(BodyParser.json())

		app.use('/posts',[AuthMiddleware.handle,PostRoutes]);

		app.listen(this.port,() => {
    	console.log("Listening on port: "+this.port)
		})
		}
}

module.exports = App