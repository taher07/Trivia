const express = require("express")
const { showIndex } = require("../controllers/student")
const router = express.Router()

router.get("/", showIndex)

module.exports = router
