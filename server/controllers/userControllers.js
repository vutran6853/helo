const userBase = require('../controllers/users')


let postUser = (req, res, next) => {
  // console.log('REQ BODY:' , req.body)
  // console.log('REQ PARAMS:' , req.params)

  const dbInstance = req.app.get('db');

  dbInstance.postRegister_user(req.body.name, req.body.password)
  .then((response) => {
    console.log(response)
    // res.status(200).send(response)
  })
  .catch((error) => {
    res.status(500).send('Oop, Something have happen unable to post user')
    console.log(error)
  })
}

let login = (req, res, next) => {
    // console.log('Line 22 req.params', req.params)
    console.log('Line 23 req.body',req.body)
    const { session } = req;
    session.username = req.body.username;
    session.password = req.body.password;
    console.log('Line 27 session: ', session)
    const { username, password } = req.body;
    console.log('Line 29 session.password: ', session.password);
    console.log('Line 30 session.username: ', session.username);
    console.log('Line 31 username: ', username)
    console.log('Line 32 username: ', password)
    console.log('Line 33 userBase: ', userBase)
  


    const user = userBase.find((user) => {
      user.username === username && user.password === password
      console.log('Line 39', user.username === username && user.password === password)
      console.log('Line 40', user.username);
     return user.username
    });

    console.log('Line 43 user: ', user)


    if( session.username === user.username) {
     
      // res.status(200).send(session.user);
      console.log('GOT IN: ', username)
    } else {
      // res.status(500).send('Unauthorized');
      console.log("Unauthorized")
    }
 
}

let getUser = (req, res, next) => {
  console.log('LINE 19, REQ getUser BODY:' , req.body)
  // console.log('REQ PARAMS:' , req.params)

  const dbInstance = req.app.get('db');

  dbInstance.getUser_Info(req.body.name, req.body.password)
  .then((response) => {
    console.log('getUser_Info', response)
    res.status(200).send(response)
  })
  .catch((error) => {
    res.status(500).send('Oop, Something have happen unable to post user')
    console.log(error)
  })

}

let postUserPost = (req, res, next) => {
  console.log('Line 37, REQ PARAMS:' , req.params)
  console.log('Line 38, REQ BODY:' , req.body)

  const dbInstance = req.app.get('db');

  dbInstance.postUserPost_Info(req.body.title, req.body.image, req.body.content)
  .then((response) => {
    console.log('postUserPost: ', response)
    res.status(200).send(response)
  })
  .catch((error) => {
    res.status(500).send('Oop, Something have happen unable to post user')
    console.log(error)
  })

}

let getPost = (req, res, next) => {
  console.log('Line 55, REQ PARAMS:' , req.params)
  console.log('Line 56, REQ BODY:' , req.body)

  const dbInstance = req.app.get('db');
  dbInstance.getPost_Info()
  .then((response) => {
    console.log('getPost_Info: ', response)
    res.status(200).send(response)
  })
  .catch((error) => {
    res.status(500).send('Oop, Something have happen unable to post user')
    console.log(error)
  })

}

let deletePost = (req, res, next) => {
  console.log('Line 72, REQ PARAMS:' , req.params.postid)
  console.log('Line 73, REQ BODY:' , req.body)
  // console.log('Line 74, REQ :' , req)


  const dbInstance = req.app.get('db');
  dbInstance.deletePost_Info(req.params.postid)
  .then((response) => { 
    console.log('deletePost_Info: ', response)
    res.status(200).send(response)
  })
  .catch((error) => {
    res.status(500).send('Oop, Something have happen unable to DELETE user')
    console.log(error)
  })

  

}




module.exports = {
  postUser,
  getUser,
  postUserPost,
  getPost,
  deletePost,
  login
}