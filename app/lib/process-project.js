const loadFromS3 = require('./load-from-s3');
const screenshot = require('./screenshot');

module.exports = async projectId => {
    console.log(`processing project ${projectId}`)

    const modelNames = ['architecture', 'structure']

    console.log(`project models: ${modelNames.join()}`)

    const modelToDownload = modelNames.map(name => loadFromS3(projectId, name))
    const models = await Promise.all(modelToDownload);

    console.log(`created ${models.length} models`)
    
    modelNames.forEach((name, idx) => screenshot(projectId, name, models[idx]))
}