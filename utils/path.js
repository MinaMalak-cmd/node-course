const path = require('path');

// module.exports = path.dirname(process.mainModule.filename); //deprecated version
module.exports = path.dirname(require.main.filename);
