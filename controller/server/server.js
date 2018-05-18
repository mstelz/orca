const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'dist/index.html')));

app.listen(port, () => console.log(`Listening on port ${port}`));
