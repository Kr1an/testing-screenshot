const S3 = require('aws-sdk/clients/s3');

module.exports = async (projectId, name) => {
    const s3 = new S3();
    const options = {
        Bucket: 'tf-large-data-storage-dev',
        Key: [projectId, name].join('/')
    }

    console.log(`loading from s3:/${options.Bucket}/${options.Key}`)
    
    const response = await s3.getObject(options).promise();
    const rawModel = response.Body.toString()
    const model = JSON.parse(rawModel); 

    console.log(`loading from s3 finished. Downloaded ${rawModel.length} byte.`)
    return model;
}