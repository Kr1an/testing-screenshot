const transparentBackground = require('lib/transparent-background')
const gm = require('gm')
const fs = require('fs');
const PNG = require('pngjs').PNG
const imageMagick = gm.subClass({ imageMagick: true })

describe('node-localstack', () => {
    it('', async(done) => {
        const image = imageMagick(2, 2, "#000000").toBuffer('png', async (err, blackImage) => {
            
            const initial = new PNG()
            initial.end(blackImage)
            initial.on('parsed', function() {
                this.data.reduce((acc, cur, idx) => {
                    return acc
                })
            })
            const transformedImage = await transparentBackground(blackImage)
            const transformed = new PNG()
            transformed.end(transformedImage)
            transformed.on('parsed', function() {
                const notNullCount = this.data.reduce((acc, cur) => acc + cur, 0)
                expect(notNullCount).toEqual(0);
                done()
            })
        })
    })
})
