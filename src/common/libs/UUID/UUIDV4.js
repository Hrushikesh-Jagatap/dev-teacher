const { v4: uuidv4 } = require('uuid'); // Import 'v4' from 'uuid' instead of 'uuidv4'
const createUUID = () => {
  const uniqueNumber = uuidv4(); 
  return uniqueNumber;
};
module.exports = { createUUID };
