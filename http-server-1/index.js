const express = require('express')
const port = 3003
const app = express();

app.post('/conversation', (req, res) => {
  res.send('learning HTTP Server')
})

app.listen(port)            


// create an todo app that lets users store todos on the server  
   // try to creat a http server from scratch in C
   // create an http server in rust using actix-web