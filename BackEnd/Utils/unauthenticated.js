const CustomAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

module.exports = class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.UNAUTHORIZED
  }
}

