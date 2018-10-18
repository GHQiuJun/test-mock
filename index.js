const logger = require('simple-json-logger')
const getReq = require('./src/get-req-detail')
const express = require('express')()
const bodyParser = require('body-parser')
const config = require('./config')

// for parsing application/json
express.use(bodyParser.json())
// for parsing application/x-www-form-urlencoded
express.use(bodyParser.urlencoded({extended: true}))

express.get('/test-mock', async function (req, res) {
  const reqInfo = getReq(req)
  logger.info(reqInfo)
  res.send({
    status: 'ok',
    req: reqInfo
  })
})

express.post('/test-mock', async function (req, res) {
  const reqInfo = getReq(req)
  logger.info(reqInfo)
  res.send({
    status: 'ok',
    req: reqInfo
  })
})

express.put('/test-mock', async function (req, res) {
  const reqInfo = getReq(req)
  logger.info(reqInfo)
  res.send({
    status: 'ok',
    req: reqInfo
  })
})

express.delete('/test-mock', async function (req, res) {
  const reqInfo = getReq(req)
  logger.info(reqInfo)
  res.send({
    status: 'ok',
    req: reqInfo
  })
})

express.listen(config.port)
logger.info('test http service start success!')
