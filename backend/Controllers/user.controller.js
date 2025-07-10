const userModel = require("../Models/user.model")
const bcrypt = require('bcryptjs')
const generateToken = require('../Utils/token')

const user = {}

user.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await userModel.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        
        const user = await userModel.create({
            name,
            email,
            password: hashedPassword,
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

user.loginUser =async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email });
        if (!user) return res.status(401).json({ message: 'Invalid email or password' });

        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = user


