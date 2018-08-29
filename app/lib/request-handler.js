const processProject = require('./process-project');

module.exports = (req, res) => {
  console.log(`getting request from ${req.ip}`);
  const { id } = req.body;
  console.log(`request with id: ${id}`);
  if (!id) {
    res.status(400);
    return res.end();
  }
  try {
    processProject(id);
    return res.end();
  } catch (e) {
    console.error(e);
    return res.end();
  }
};
