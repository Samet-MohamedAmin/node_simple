const express = require('express');
const app = express();


app.get('/test', (req, res) => {
  res.send("hello User !");
  console.log("path /test visited");
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


/*
app.get('/test/:name', (req, res) => {
  msg = {"message": `hello ${req.params.name} !`};
  res.send(msg);

  console.log("path /test/:name visited");
});
*/