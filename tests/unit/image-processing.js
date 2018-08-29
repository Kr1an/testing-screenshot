const transparentBackground = require('lib/transparent-background');
const gm = require('gm');
const { PNG } = require('pngjs');

const imageMagick = gm.subClass({ imageMagick: true });

describe('node-localstack', () => {
  it('', async done => {
    imageMagick(2, 2, '#000000').toBuffer('png', async (err, blackImage) => {
      const transformedImage = await transparentBackground(blackImage);
      const transformed = new PNG();
      transformed.end(transformedImage);
      transformed.on('parsed', function _() {
        const notNullCount = this.data.reduce((acc, cur) => acc + cur, 0);
        expect(notNullCount).toEqual(0);
        done();
      });
    });
  });
});
