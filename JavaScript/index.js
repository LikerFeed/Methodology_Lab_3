'use strict';

const express = require('express');

const app = express();

app.get('/', (res) => res.json('Test'));

app.listen(8080, () => {
    console.log('Server started on port 8080!');
})
