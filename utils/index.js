const winston = require("winston")
const redis = require("redis")
const { REDIS_PORT } = require("../config")

exports.infoLogger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: 'dddd DD-MM-YYYY hh:mm:ss A' }),
    winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()]
})

exports.errorLogger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: 'dddd DD-MM-YYYY hh:mm:ss A' }),
    winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [new winston.transports.Console()]
})

exports.redisClient = redis.createClient(REDIS_PORT)

this.redisClient.on("error", err => this.errorLogger.error(err))
