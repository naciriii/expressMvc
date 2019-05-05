
class AuthMiddleware {
	
	handle(req, res, next)
	{
		
		if(req.header('Authorization')) {
			
			if(req.header('Authorization').split(' ')[1] == "secret") {
				return next();
			} else {
					return res.status(401).send('Unauthorized wrong')
			}
		} else {
			
			return res.status(401).send('Unauthorized')
		}

	}
}
module.exports = new AuthMiddleware();