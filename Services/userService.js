const mongoose = require('mongoose')
const user = require('../Models/userSchema')
class UserService {
    static async createUser(option) {
        try {
            const data = new user(option);
            return await data.save();
        } catch (error) {
            // console.log(error)
            return error;
        }
    }
    static async updateUser(option, id) {
        return await user
            .findByIdAndUpdate(id, option, { new: true })
            .then((data) => {
                return data;
            })
            .catch((er) => {
                console.log(er)
            });
    }

    static async deleteUser(_id) {
        return await user
            .findByIdAndDelete(_id)
            .then((data) => {
                return data;
            })
            .catch((er) => {
                throw new Error(er);
            });
    }
 
    static async getUserById(id) {
        try {
            return await user.findById(id)

        } catch (error) {
            console.log(error)
        }
    }

    static async getUserByEmail(email) {
        try {
            return await user.findOne({ email: email })
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = UserService;