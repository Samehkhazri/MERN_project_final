const {register, login, logout, getLoggedUser, allUsers} = require('../controllers/user.controllers')
// const UserController = require('../controllers/user.controllers')
module.exports = (app) => {
    app.post('/api/register', register)
    // app.post('/api/admin/register', registerAdmin)
    app.post('/api/login', login)
    app.post('/api/logout', logout)
    app.get('/api/user', getLoggedUser)
    app.get('/api/users', allUsers);
}