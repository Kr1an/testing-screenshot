const loadFromS3 = require('lib/load-from-s3');
const uploadToS3 = require('lib/upload-to-s3');

const mockedPutObject = jest.fn();
const mockedGetObject = jest.fn();
jest.mock('aws-sdk/clients/s3', () => class S3 {
  putObject(params) {
    mockedPutObject(params);
    return {
      promise: () => Promise.resolve(),
    };
  }

  getObject(params) {
    mockedGetObject(params);
    return {
      promise: () => Promise.resolve({ Body: '{}' }),
    };
  }
});

describe('aws-s3', () => {
  it('should upload object with correct options', async () => {
    await uploadToS3('123', 'sadf', 'asdf');
    expect(mockedPutObject).toHaveBeenCalledTimes(1);
  });
  it('should load object with correct options', async () => {
    await loadFromS3('123', 'sadf');
    expect(mockedGetObject).toHaveBeenCalledTimes(1);
  });
});
