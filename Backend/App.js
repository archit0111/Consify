const express = require('express');

const app = express();

app.use('api/users');

app.listen(process.env.PORT);