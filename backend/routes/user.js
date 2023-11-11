const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String, // Corregido el nombre del campo
    lastName: String,
    userName: String,
    email: String,
    password: String,
    userId: String
});

const UserModel = mongoose.model('users', userSchema);

router.post('/adduser', async (req, res) => {
    try {
        const newUser = new UserModel({
            firstName: req.body.firstName, // Corregido el nombre del campo
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
            userId: req.body.userId
        });

        await newUser.save();

        res.send('User added successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/getusers', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/getuserdata', async (req, res) => {
    try {
        const users = await UserModel.find({ userId: req.body.userId });
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/updateuser', async (req, res) => {
    try {
        await UserModel.findOneAndUpdate({ userId: req.body.userId }, {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
        });

        res.send('User updated successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/deleteuser', async (req, res) => {
    try {
        await UserModel.findOneAndDelete({ userId: req.body.userId });
        res.send('User deleted successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;