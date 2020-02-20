const express = require('express');

cosnt app = express();

app.get('/' , (request , response) => {
  return response.send('Hello World');
});


app.listen(3333);