const express = require('express');
const app = express();
app.use(express.static('dist'));
app.use(express.static('public'));
app.listen(port = process.env.PORT || 3000, () => console.log('Listening on port 3000!'));
