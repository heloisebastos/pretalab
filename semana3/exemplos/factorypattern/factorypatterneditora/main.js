const UserFactory = require('./factory')

const admin1 = UserFactory.createUser('admin', 'Heloíse')
console.log(admin1.getPermissions())