const puppeteer = require('puppeteer')

module.exports = async () => {
    console.log('creating browser')
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--no-sandbox',
            '--headless',
            '--enable-webgl',
            '--disable-dev-shm-usage'
        ]
    })
    console.log('browser is created')
    return browser
}
