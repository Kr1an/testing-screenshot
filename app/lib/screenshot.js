const uploadToS3 = require('./upload-to-s3');
const prepareBrowser = require('./prepare-browser');
const preparePage = require('./prepare-page');
const transparentBackground = require('./transparent-background');

module.exports = async (projectId, name, model) => {
  console.log(`making screenshot of project(${projectId}), model(${name})`);
  const start = Date.now();
  const browser = await prepareBrowser();
  const page = await preparePage(browser, model);

  const options = { type: 'png' };
  const screenshot = await page.screenshot(options);
  console.log(`screenshot is created. Timestamp: ${Date.now() - start}ms`);
  await browser.close();
  console.log('browser is closed');

  const processedScreenshot = await transparentBackground(screenshot);
  uploadToS3(projectId, name, processedScreenshot);
};
