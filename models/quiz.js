const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    id: Number,
    question: { type: String, required: true },
    answers: [{ id: Number, text: {type: String, required: true}, isCorrect: {type: Boolean, required: true}}],
});

const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;