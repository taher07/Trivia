const { logIn, takeTest } = require("../services/student")

exports.showIndex = (req, res) => {
  return res.render("index")
}

exports.logStudentIn = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return res.render("404")

  const person = logIn(email, password)

  if (!person) return res.render("404")
  else return res.redirect(`/profile/${person}`)
}

exports.showProfile = (req, res) => {
  // TASK: Show profile here
  const student = req.student

  if (!student) return res.render("404")

  return res.render("index", {
    student
  })
}

exports.showQuestions = (req, res) => {
  // TASK: Test begins here
  const question = takeTest(req.student.id, req.test.id)

  if (!question) return res.render("404")
  // TODO: Add appropriate view here
  else return res.render("")
}

exports.submitAnswer = (req, res) => {
  // TASK: Submit answer
}

exports.showResults = (req, res) => {
  // TASK: Show test result here
}
