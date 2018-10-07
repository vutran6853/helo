let postUser = (req, res, next) => {
  // console.log(req);
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

let getUser = (req, res, next) => {
  console.log('LINE 20, REQ getUser BODY:' , req.body)
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
  console.log('Line 40, REQ PARAMS:' , req.params)
  console.log('Line 41, REQ BODY:' , req.body)

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
  console.log('Line 56, REQ PARAMS:' , req.params)
  console.log('Line 57, REQ BODY:' , req.body)

  // const dbInstance = req.app.get('db');



}


module.exports = {
  postUser,
  getUser,
  postUserPost,
  getPost
}