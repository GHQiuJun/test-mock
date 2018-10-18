module.exports = function (req) {
  const reqInfo = {
    ip: req.ip,
    host: req.hostname,
    path: req.path,
    query: req.query,
    body: req.body
  }
  return reqInfo
}
