const express = require('express');
const router  = express.Router();
const quizController = require('../controllers/quiz'); 

router.get('/quiz', quizController.getAllQuizzes);
router.post('/quiz', quizController.newQuiz);

router.get('/quiz/:id', quizController.getQuiz);
router.post('/quiz/:id', quizController.newQuizAtId);
router.delete('/quiz/:id', quizController.deleteQuiz);

module.exports = router;