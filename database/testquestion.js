const model = (require("../models/")).sequelize.models.TestQuestion

class TestQuestionDB {
  getAll = () => {
    return model.findAll().then(data => data.rows).catch(err => {
      errorLogger.error(err)
      return false
    })
  }

  getByID = (id) => {
    return model.findByPk(id).then(data => data.rows).catch(err => {
      errorLogger.error(err)
      return false
    })
  }

  getByTestID = (id) => {
    return model.findAll({
      where: {
        test_id: id
      }
    }).then(data => data.rows).catch(err => {
      errorLogger.error(err)
      return false
    })
  }

  getByStudentTestID = (studentID, testID) => {
    return model.findAll({
      where: {
        test_id: testID,
        student_id: studentID
      }
    }).then(data => data.rows).catch(err => {
      errorLogger.error(err)
      return false
    })
  }

  add = (payload) => {
    return model.create(payload).then(data => data).catch(err => {
      errorLogger.error(err)
      return false
    })
  }

  update = (id, payload) => {
    return model.findByPk(id).then(data => data.update(payload).then(updatedData => updatedData).catch(err => err)).catch(err => {
      errorLogger.error(err)
      return false
    })
  }

  remove = (id) => {
    return model.findByPk(id).then(data => data.destroy()).catch(err => {
      errorLogger.error(err)
      return false
    })
  }
}

module.exports = TestQuestionDB
