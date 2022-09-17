const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
    id: Number,
    question: { type: String, required: true },
    answers: [{ id: Number, text: { type: String, required: true } }],
    answer: { type: Number, required: true }
});

const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;