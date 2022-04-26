const User = require("../models/User")

class UserService{
    static create(id, username, name){
        return new User(id, username, name, "Sin Bio")
    }

    static getInfo(user){
        return Object.values(user)
    }

    static updateUserName(user, username){
        user.setUsername = username
    }

    static getAllUsernames(users){
        const allusers = users.map(users => users.username)
        return allusers
    }
}

module.exports = UserService