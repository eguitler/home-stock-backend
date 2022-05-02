const admin = require('../services/firebase');

const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodeValue = await admin.auth().verifyIdToken(token);
    // console.log('DECODED: ', decodeValue);
    if (decodeValue) next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = verifyToken;
