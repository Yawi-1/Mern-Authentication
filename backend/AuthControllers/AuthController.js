import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModal from '../Models/userModal.js';

const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const isEmail = await UserModal.findOne({ email: email });
        if (isEmail) {
            return res.status(400).json({
                message: "Email already exists",
                success: false
            });
        }
        const newUser = new UserModal({ username, email, password });
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        return res.status(201).json({
            message: "User created successfully",
            success: true
        });
    } catch (error) {
        console.log('Error at sign Up:', error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModal.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                message: "Email doesn't exist",
                success: false
            });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            return res.status(400).json({
                message: "Password is incorrect",
                success: false
            });
        }

        const jwtToken = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "24h" }
        );

        return res.status(200).json({
            message: "User logged in successfully",
            success: true,
            token: jwtToken,
            email: user.email
        });

    } catch (error) {
        console.log('Error at login:', error);
        return res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};

export { signup, login };
