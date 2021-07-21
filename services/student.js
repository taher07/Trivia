const { redisClient, errorLogger } = require("../utils")

exports.logIn = (email, password) => {
  const manager = new (require("../database/student"))()
  const credentialsVerified = manager.matchCredentials(email, password)

  if (credentialsVerified) return true
  else return false
}

exports.takeTest = (studentID, testID) => {
  const studenttestManager = new (require("../database/studenttest"))()
  const testquestionManager = new (require("../database/testquestion"))()
  const testManager = new (require("../database/test"))()

  const totalQuestions = testManager.getQuestionCountByID(testID)
  const attemptedQuestions = studenttestManager.getAttemptedQuestionCount(studentID, testID)
  const remainingQuestions = totalQuestions - attemptedQuestions

  if (!remainingQuestions) return false

  if (!redisClient.get(`${studentID}_${testID}`)) {
    const questions = testquestionManager.getByStudentTestID(studentID, testID)
    let shuffledQuestions = shuffle(questions)
    const question = shuffledQuestions.pop()

    const added = redisClient.set(`${studentID}_${testID}`, shuffledQuestions)

    if (!added) return false
    return question
  }
  else {
    return redisClient.get(`${studentID}_${testID}`, (err, questions) => {
      if (err) {
        errorLogger.error(err)
        return false
      }
      if (questions) {
        const question = questions.pop()
        redisClient.set(`${studentID}_${testID}`, questions)

        return question
      }
    })
  }
}

const shuffle = (data) => {
  // TODO: Shuffle data here
}

exports.addStudentTest = () => {

}
