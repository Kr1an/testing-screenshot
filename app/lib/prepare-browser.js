const puppeteer = require('puppeteer')

module.exports = async () => {
    console.log('creating browser')
    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--ignore-gpu-blacklist',
            '--enable-webgl-draft-extensions',
            '--enable-webgl',
        ]
    })
    console.log('browser is created')
    return browser
}