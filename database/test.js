const model = (require("../models/")).sequelize.models.Test

class TestDB {
  getAll = () => {
    return model.findAll().then(data => data).catch(err => err)
  }

  getByID = (id) => {
    return model.findByPk(id).then(data => data).catch(err => err)
  }

  add = (payload) => {
    return model.create(payload).then(data => data).catch(err => err)
  }

  update = (id, payload) => {
    return model.findByPk(id).then(data => data.update(payload).then(updatedData => updatedData).catch(err => err)).catch(err => err)
  }

  remove = (id) => {
    return model.findByPk(id).then(data => data.destroy()).catch(err => err)
  }
}

module.exports = TestDB
