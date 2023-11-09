const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    userId: String
});

const UserModel = mongoose.model('users', userSchema);

router.post('/adduser', async (req, res) => {
    try {
        const newUser = new UserModel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            userId: req.body.userId
        });

        await newUser.save(); // Use async/await to wait for the save operation

        res.send('User added successfully');
    } catch (error) {
        res.status(500).send(error.message); // Handle the error properly
    }
});

// Route to get all users
router.get('/getusers', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Route to get user data by userId
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
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        });

        res.send('User updated successfully');
    } catch (error) {
        res.status(500).send(error.message); // Handle the error properly
    }
});

router.post('/deleteuser', async (req, res) => {
    try {
        await UserModel.findOneAndDelete({ userId: req.body.userId });

        res.send('User deleted successfully');
    } catch (error) {
        res.status(500).send(error.message); // Handle the error properly
    }
});

module.exports = router;

