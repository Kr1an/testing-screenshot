const express = require('express');
const bodyParser = require('body-parser')
const requestHandler = require('./request-handler');

module.exports = () => {
    console.log('creating http server')

    const app = express()
    const port = 4000
    const hostname = '0.0.0.0'

    app.use(bodyParser.json())

    app.post('/', requestHandler);

    app.listen(port, hostname)

    console.log(`http server was created at address ${hostname}:${port}`)

    return app;
}
