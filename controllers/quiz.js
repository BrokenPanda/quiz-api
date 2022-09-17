const Quiz = require('../models/quiz');

// GET /quiz
const getAllQuizzes = (req, res, next) => {
    Quiz.find({}, (err, data) => {
        if (err) return res.json({ Error: err });
        return res.json(data);
    })
};

// POST /quiz
const newQuiz = (req, res, next) => {
    Quiz.find().sort({ id: -1 }).limit(1).exec(function (err, data) {
        if (!err) {
            let id = parseInt(data.map((id) => { return id.id })) + 1;

            const newQuiz = new Quiz({
                id: id,
                question: req.body.question,
                answers: req.body.answers,
                answer: req.body.answer
            })

            console.log("New ID is: " + id);

            newQuiz.save((err, data) => {
                if (err) return res.json({ Error: err });
                return res.json(data);
            })
        } else {
            return res.json({ message: `Something went wrong, please try again. ${err}` });
        }
    });
};

// GET /quiz/id
const getQuiz = (req, res, next) => {
    let id = req.params.id;
    Quiz.findOne({ id: id }, (err, data) => {
        if (err || !data) return res.json({ message: "Quiz does not exist." });
        return res.json(data);
    })
};

// POST /Quiz/id
const newQuizAtId = (req, res, next) => {
    let id = req.params.id;
    Quiz.findOne({ id: id }, (err, data) => {
        if (!data) {
            const newQuiz = new Quiz({
                id: id,
                question: req.body.question,
                answers: req.body.answers,
                answer: req.body.answer
            })

            newQuiz.save((err, data) => {
                if (err) return res.json({ Error: err });
                return res.json(data);
            })
        }
        else {
            if (err) return res.json({ message: `Something went wrong, please try again. ${err}` });
            else return res.json({ message: "Quiz already exists." });
        }
    });
};

// DELETE /quiz/id
const deleteQuiz = (req, res) => {
    Quiz.deleteOne({ id: req.params.id }, (err, data) => {
        if (data.deletedCount == 0) return res.json({ message: "Quiz does not exist." });
        else if (err) return res.json(`Something went wrong, please try again. ${err}`);
        else return res.json({ message: "Quiz deleted." });
    });
};

module.exports = {
    getAllQuizzes,
    newQuiz,
    getQuiz,
    newQuizAtId,
    deleteQuiz
};