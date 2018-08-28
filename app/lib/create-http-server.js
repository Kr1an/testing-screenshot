const express = require('express');
const bodyParser = require('body-parser')
const requestHandler = require('./request-handler');

module.exports = (port=4000, hostname='0.0.0.0') => {
    console.log('creating http server')

    const app = express()

    app.use(bodyParser.json())

    app.post('/', requestHandler);

    const server = app.listen(port, hostname)

    console.log(`http server was created at address ${hostname}:${port}`)

    return server;
}
