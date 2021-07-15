const { SECRET_KEY } = require("../config/")
const jwt = require("jsonwebtoken")

exports.getGroupById = (req, res, next, id) => {
  const manager = new (require("../database/group"))()

  const group = manager.getByID(id)
  if (!group)
    return res.status(400)
  else {
    req.group = group
    next()
  }
}

exports.getQuestionById = (req, res, next, id) => {
  const manager = new (require("../database/question"))()

  const question = manager.getByID(id)
  if (!question)
    return res.status(400)
  else {
    req.question = question
    next()
  }
}

exports.getQuestionTagById = (req, res, next, id) => {
  const manager = new (require("../database/questiontag"))()

  const questionTag = manager.getByID(id)
  if (!questionTag)
    return res.status(400)
  else {
    req.questionTag = questionTag
    next()
  }
}

exports.getStudentById = (req, res, next, id) => {
  const manager = new (require("../database/student"))()

  const student = manager.getByID(id)
  if (!student)
    return res.status(400)
  else {
    req.student = student
    next()
  }
}

exports.getStudentAccessLogById = (req, res, next, id) => {
  const manager = new (require("../database/studentaccesslog"))()

  const studentAccessLog = manager.getByID(id)
  if (!studentAccessLog)
    return res.status(400)
  else {
    req.studentAccessLog = studentAccessLog
    next()
  }
}

exports.getStudentResultById = (req, res, next, id) => {
  const manager = new (require("../database/studentresult"))()

  const studentResult = manager.getByID(id)
  if (!studentResult)
    return res.status(400)
  else {
    req.studentResult = studentResult
    next()
  }
}

exports.getStudentTestById = (req, res, next, id) => {
  const manager = new (require("../database/studenttest"))()

  const studentTest = manager.getByID(id)
  if (!studentTest)
    return res.status(400)
  else {
    req.studentTest = studentTest
    next()
  }
}

exports.getTestById = (req, res, next, id) => {
  const manager = new (require("../database/test"))()

  const test = manager.getByID(id)
  if (!test)
    return res.status(400)
  else {
    req.test = test
    next()
  }
}

exports.getTestQuestionById = (req, res, next, id) => {
  const manager = new (require("../database/testquestion"))()

  const testQuestion = manager.getByID(id)
  if (!testQuestion)
    return res.status(400)
  else {
    req.testQuestion = testQuestion
    next()
  }
}

exports.isAuthenticated = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) return res.render("401")
  try {
    jwt.verify(token, SECRET_KEY);
    next();
  } catch (exception) {
    res.status(400).render("401")
  }
}
