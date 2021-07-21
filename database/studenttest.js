const model = (require("../models/")).sequelize.models.StudentTest

class StudentTestDB {
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

  getAttemptedQuestionCount = (studentID, testID) => {
    return model.count({
      where: {
        student_id: studentID,
        test_id: testID
      }
    }).then(count => count).catch(err => {
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

module.exports = StudentTestDB
