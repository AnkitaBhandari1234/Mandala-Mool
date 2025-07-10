const userModel = require("../Models/user.model")

const user = {}

user.postUser = async (req, res) => {
    try {
        const user = new userModel(req.body);
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// Get all users
user.getUser = async (req, res) => {
    const users = await userModel.find();
    res.json(users);
}

module.exports = user