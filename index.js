'use strict'

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const appRoutes = require('./routes/routes')
const app = express();

app.use(express.json())
app.use(cors())
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use('/', appRoutes.routes)

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port))
