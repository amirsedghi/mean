var mongoose = require('mongoose');
var User = mongoose.model('User');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {

  getAll : function(req, res){
    Question.find({}).exec(function(err,questions){
      if(err){
        console.log('could not get the questions');
        res.sendStatus(400)
      } else {
        res.json(questions)
      }
    })
  },
  add : function(req, res){
    console.log('WE GOT HERE AND HERE IS THE DATA WE HAVE SENT OVER');
    console.log(req.body);
    var question = new Question(req.body)
    question.save(function(err){
      if(err){
        res.sendStatus(400)
      } else{
        res.sendStatus(200)
      }
    })
  },
  getOne : function(req, res){
    Question.findOne({_id: req.params.id}).populate({path: 'answers', populate:{path: '_user', model:'User'}}).exec(function(err, question){
      if(err){
        console.log('was not able to get the question');
        res.sendStatus(400);
      } else {
        console.log('we got the question you wanted');
        res.json(question)
      }
    })
  }

}
