var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AnswerSchema = new mongoose.Schema({
  answer: {type: String, required: true},
  detial: {type: String, default: ''},
  _question: {type: Schema.Types.ObjectId, ref: "Question"},
  likeCount: {type: Number, default: 0},
  _user: {type: Schema.Types.ObjectId, ref: "User"},
})

mongoose.model('Answer', AnswerSchema)
