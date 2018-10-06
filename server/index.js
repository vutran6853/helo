require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const massive = require('massive');
const port = process.env.SERVER_PORT || 3002;
const cors = require('cors');
const app = express();


app.use(cors())

//  MASSIVE CONNECT TO SQL SYSTEM FUNCTIONALITY
massive(process.env.CONNECTION_STRING)
.then(dbInstace => {
  // console.log('Copy of dbInstace', dbInstace )
  app.set('db', dbInstace)
})
.catch(error => console.log('DANGER! : ', error));

app.use(json());

const path = require('path'); // Usually moved to the start of file


app.post('/api/auth/register')
app.post('/api/auth/login')



app.get('/api/posts/:userid')
app.get('/api/post/postid')


app.use( express.static( `${__dirname}/../build` ) );


app.listen(port, () => {
  console.log(`Server is UP and listening on port ${ port }`);
});
