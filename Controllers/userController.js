const express = require('express')
const userService = require('../Services/userService');
const { hashPassword } = require('../Utils/auth');
const userServices = new userService();



class UserController {

    static async newUser(request, response) {
        try {

            const option = {
                ...request.body,
                password: hashPassword(request.body.password)
            }
            const data = await userService.createUser(option);
            // console.log(data)
            return response.status(201).json(data);

            // return response.json({error: false, msg: "OK", data})
        } catch (error) {
            // console.log(error);
            return response.status(400).json({ error: true, msg: error.message });
        }
    }

    static async updateUser(req, response) {
        try {
            const id = req.params.id;
            const x = await userService.getUserById(id)
            if (!x) {
                return response.status(404).json("Not Found");
            }
            const data = await userService.updateUser(req.body, x.id);
            return response.status(201).json(data);
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteUser(req, response) {
        const id = req.params.id;
        const x = await userService.getUserById(id)
        if (!x) {
            return response.status(404).json("Not Found");
        }
        const k = await userService.deleteUser(x.id)
        return response.status(202).json("Data delete Successfully")
    }

}
module.exports = UserController