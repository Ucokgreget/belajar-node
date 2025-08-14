const os = require('os')

const user = os.userInfo();
console.log(user);
console.log(os.uptime())

const info = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    cpu:os.cpus()
}
console.log(info)