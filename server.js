const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./router');
const app = express();
const cors = require("cors");
app.use(cors());
const port = 8081;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`Server listening on ${port}...`);
})