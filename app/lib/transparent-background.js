const gm = require('gm')

const imageMagick = gm.subClass({ imageMagick: true })

module.exports = (image) => {
    return new Promise((res, rej) => {
        console.log("processing image");
        imageMagick(image)
            .channel("Opacity")
            .fuzz('50%')
            .fill('none')
            .opaque('#000000')
            .toBuffer('png',(err, buffer) => {
                if (err) {
                    return rej(err)
                }
                console.log('image processing finished')
                return res(buffer)
            });
    })
}
