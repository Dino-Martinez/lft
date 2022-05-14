const express = require('express')
const router = express.Router()
const user = require('./user')

router.get('/', (req, res) => {
  res.json('yo')
})
router.use('/user', user)

module.exports = router
