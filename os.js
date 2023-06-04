const os = require('node:os');

const user = os.userInfo()

console.log(user.username)

const uptime = os.uptime()

console.log(uptime)

console.log(os.type())