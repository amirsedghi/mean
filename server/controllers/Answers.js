var mongoose = require('mongoose');
var User = mongoose.model('User');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = {
  add: function(req, res){
    User.findOne({_id:req.session.user._id}, function(err, user){
      if(err){
        res.sendStatus(400)
      } else{
        Question.findOne({_id: req.params.id}, function(err, question){
          if(err){
            res.sendStatus(400)
          } else {
            var answer = new Answer(req.body);
            answer._user = user._id;
            answer._question = question._id;
            question.answers.push(answer);
            Question.update({_id: req.params.id}, {$inc: {answerCount: 1}}, function(err){
              if(err){
                console.log('was not able to increment the answer in question');
                res.sendStatus(400)
              } else{
                user.save(function(err){
                  question.save(function(err){
                    answer.save(function(err){
                      if(err){
                        res.sendStatus(400)
                      } else {
                        res.sendStatus(200)
                      }
                    })
                  })
                })
              }
            })

          }
        })
      }
    })
  },

  like: function(req, res){
    console.log('it gets here right!!!!!?????');
    Answer.update({_id: req.params.id}, {$inc:{likeCount:1}}, function(err){
      if(err){
        res.sendStatus(400)
      } else{
        res.sendStatus(200)
      }
    })
  }


}
