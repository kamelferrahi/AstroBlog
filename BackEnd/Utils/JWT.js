const jwt = require('jsonwebtoken')
const UnauthenticatedError = require('./unauthenticated')


const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu"; 
  
const authenticationMiddleware =  (req, res, next) => {
  const authHeader = req.headers.authorization
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      next(new UnauthenticatedError('No token'))
      return
    }

    const token = authHeader.split(' ')[1]

    try {
      const decoded = jwt.verify(token, JWT_SECRET)
      const {  username } = decoded
      req.user = { username }
      next()
    } catch (error) {
      throw new UnauthenticatedError('Not authorized to access this route')
    }
  }


module.exports = authenticationMiddleware