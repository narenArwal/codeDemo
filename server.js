const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corOption = { origin: 'http:localhost:8081' };

app.use(cors(corOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require('./routes/taskRoute.js');
app.use('/api', router);

app.get('/', (req, res) => {
  req.json({ message: 'Hello from api' });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
