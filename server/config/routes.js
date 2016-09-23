var user =require('../controllers/Users.js');
var question =require('../controllers/Questions.js');
var answer =require('../controllers/Answers.js');

console.log('GOING THROUGH THE ROUTES');


module.exports = function(app){
  app.get('/', user.index);
  app.post('/register', user.register);
  app.post('/login', user.login);
  app.get('/logout', user.logout)
  app.use(authentication);
  app.get('/getUser', user.getUser);
  app.get('/getQuestions', question.getAll);
  app.post('/addQuestion', question.add);
  app.get('/getQuestion/:id', question.getOne);
  app.post('/addAnswer/:id', answer.add);
  app.get('/like/:id', answer.like);
}



function authentication(req, res, next){
  if(req.session.user){
    next()
  } else{
    res.status(401).send("Permission denied...yeah...")
  }
}
