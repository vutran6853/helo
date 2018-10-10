require('dotenv').config();
const express = require('express');
const session = require('express-session');
const { json } = require('body-parser');
const massive = require('massive');
const port = process.env.SERVER_PORT || 3002;
const cors = require('cors');
const app = express();

// INIT SESSION SETTING
app.use(session(  {
  secret: 'ilovecode',
  resave: false,
  saveUninitialized: false
}));







const checkForSession = require('./controllers/checkForSession');
const { postUser, getUser, postUserPost, login, getPost , deletePost} = require('./controllers/userControllers');

app.use(cors())
app.use(checkForSession);


//  MASSIVE CONNECT TO SQL SYSTEM FUNCTIONALITY
massive(process.env.CONNECTION_STRING)
.then(dbInstace => {
  // console.log('Copy of dbInstace', dbInstace )
  app.set('db', dbInstace)
})
.catch(error => console.log('DANGER! : ', error));

app.use(json());

const path = require('path'); // Usually moved to the start of file
app.use( express.static( `${__dirname}/../build` ) );


app.post('/api/auth/register/:userInfo', postUser)

app.post('/api/auth/login/:userInfo', getUser)

app.post('/api/posts/:userid', postUserPost)

app.post('/api/login', login)

app.get('/api/posts/:userid')


app.get('/api/post/:postid', getPost)
app.delete('/api/posts/:postid', deletePost)




app.listen(port, () => {
  console.log(`Server is UP and listening on port ${ port }`);
});
