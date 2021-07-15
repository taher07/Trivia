const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const winston = require("winston")
const expressWinston = require("express-winston")
const path = require("path")
const { PORT } = require("./config")
const { infoLogger } = require("./utils")

const app = express()

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())
app.use(cors())
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
}))

const studentRoute = require("./routes/student")
const adminRoute = require("./routes/admin")

app.use("/", studentRoute)
app.use("/admin", adminRoute)

app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  )
}));

const server = app.listen(PORT, () => infoLogger.log("info", `Application started at port ${PORT}`))

module.exports = server
