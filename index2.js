const os = require('os');
console.log(os.homedir());
console.log(os.platform());
console.log(os.totalmem()/(1024.0*1024.0));
console.log(os.release());
console.log(os.freemem()/(1024.0*1024.0));