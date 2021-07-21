const express = require("express")
const { showIndex, logStudentIn, showProfile, showQuestions, submitAnswer, showResults } = require("../controllers/student")
const { isAuthenticated, getGroupById, getQuestionById, getQuestionTagById, getStudentById, getStudentAccessLogById, getStudentResultById, getStudentTestById, getTestById, getTestQuestionById } = require("../middlewares")
const router = express.Router()

router.param("groupID", getGroupById)
router.param("questionID", getQuestionById)
router.param("questiontagID", getQuestionTagById)
router.param("studentID", getStudentById)
router.param("studentaccesslogID", getStudentAccessLogById)
router.param("studentresultID", getStudentResultById)
router.param("studenttestID", getStudentTestById)
router.param("testID", getTestById)
router.param("testquestionID", getTestQuestionById)

router.get("/", showIndex)
router.post("/login", logStudentIn)
router.get("/profile/:studentID", isAuthenticated, showProfile)
router.get("/test/:studentID/:testID", isAuthenticated, showQuestions)
router.post("/test/:studentID/question/:testquestionID", isAuthenticated, submitAnswer)
router.get("/result/:studentID/:studentresultID", isAuthenticated, showResults)

module.exports = router
