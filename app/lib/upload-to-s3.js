

const S3 = require('aws-sdk/clients/s3');

module.exports = async (projectId, name, screenshot) => {
  console.log('uploading to s3');
  const s3 = new S3();
  const options = {
    Bucket: 'tf-large-data-storage-dev',
    Key: [projectId, 'screenshots', name].join('/'),
    Body: screenshot,
  };
  await s3.putObject(options).promise();
  console.log('upload to s3 is finished');
};
