const userBase = require('../controllers/users')


module.exports = function(req, res, next) {
  // console.log('Line 5 req.params: ', req.params)
  // console.log('Line 6 req.body: ', req.body)
  const { session } = req;    // <-- OBJECT DES
  // console.log('Line 8 req.session: ', session);
  // console.log('Line 9 req.params: ', req.params)
  // console.log('Line 10 req.body: ',req.body)
  console.log(userBase);
  // if(!session.username) {       
  //   session.username = { username: ''}  
  // }

  next();                  
}