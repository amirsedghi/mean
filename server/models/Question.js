var mongoose = require('mongoose')
var Schema = mongoose.Schema

var QuestionSchema = new mongoose.Schema({
  question: {type: String, required: true},
  description: {type: String, default: ''},
  answers: [{type: Schema.Types.ObjectId, ref: "Answer"}],
  answerCount: {type: Number, default: 0},
  create_at: {type: Date, default: Date.now}
})

mongoose.model('Question', QuestionSchema)
