const fs = require('fs')
const path = require('path')
const delay = require('delay')

module.exports = async (browser, model) => {
    console.log('preparing page')
    const page = await browser.newPage()
    await page.setViewport({ width: 1900, height: 1000 })
    await page.evaluate(fs.readFileSync(path.join(__dirname, 'engine.js'), 'utf8'))
    await page.evaluate(() => {
        const body = document.body
        body.style.width = '100%'
        body.style.height = '100%'
        body.style.margin = 0
        window.engineInstance = new window.engine(body, 'https://large-data-storage.dev.kreodesign.uk/textures/')
    })
    await page.evaluate(async scene => {
        window.engineInstance.setBackgroundColor("black");
        await window.engineInstance.setBuilding(scene)
    }, JSON.parse(model.scene))
    await delay(1000)

    console.log('page was prepared')
    return page
}
