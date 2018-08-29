const prepareBrowser = require('lib/prepare-browser')
const preparePage = require('lib/prepare-page')

describe("prepare-screenshot", () => {
    it('prepare-browser', async () => {
        const browser = await prepareBrowser()
        expect(browser).toBeTruthy();
    })

    it('prepare-page', async () => {
        const browser = await prepareBrowser()
        const page = preparePage(browser);
        expect(page).toBeTruthy();
    })
})
