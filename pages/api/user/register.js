import connectDB from "@/db";
import User from "@/models/user-model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export default async function handler(req, res) {
    try {
        if (req.method === "POST") {
            connectDB();
            const { name, email, password } = req.body;
            if (!name || !email || !password) {
                return res.status(400).json({ msg: "All Fields are Mandatory !" });
            }
            const emailExists = await User.findOne({ email });
            if (emailExists) {
                return res.status(400).json({ msg: "User already Registered !" });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                name,
                email,
                password: hashedPassword
            })
            const token = jwt.sign({id: newUser._id}, "hellodoe", { expiresIn: '30d' });
            return res
                .status(201)
                .json({ msg: "Registered Succesfully !", token });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ err: error.message });
    }
}