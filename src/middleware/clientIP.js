const clientIP = (req, res, next) => {
  const ip =
    req.ip ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null)

  console.log("IP address: ", ip)

  next()
}

module.exports = clientIP
