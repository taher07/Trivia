const { errorLogger } = require("../utils")
const sequelize = require("sequelize")
const model = (require("../models/")).sequelize.models.Student

class StudentDB {
  getAll = () => {
    return model.findAll().then(data => data.rows).catch(err => {
      errorLogger.log("error", err)
      return false
    })
  }

  getByID = (id) => {
    return model.findByPk(id).then(data => data).catch(err => {
      errorLogger.log("error", err)
      return false
    })
  }

  matchCredentials = (username, password) => {
    return model.findOne({
      where: {
        username,
        password
      },
      attributes: ["id"]
    })
      .then(res => {
        if (res === 1) return true
        else return false
      })
      .catch(err => {
        errorLogger.log("error", err)
        return false
      })
  }

  add = (payload) => {
    return model.create(payload)
      .then(data => data)
      .catch(err => {
        errorLogger.log("error", err)
        return false
      })
  }

  update = (id, payload) => {
    return model.findByPk(id)
      .then(data => data.update(payload).then(updatedData => updatedData).catch(err => {
        errorLogger.log("error", err)
        return false
      }))
      .catch(err => {
        errorLogger.log("error", err)
        return false
      })
  }

  remove = (id) => {
    return model.findByPk(id)
      .then(data => data.destroy())
      .catch(err => {
        errorLogger.log("error", err)
        return false
      })
  }
}

module.exports = StudentDB
