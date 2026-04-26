"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = __importDefault(require("../utils/validation"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../model/user"));
const signup = async (req, res) => {
    console.log("In Landing controler");
    const joiRes = validation_1.default.validate(req.body);
    if (joiRes.error) {
        return res.status(400).json({ message: `${joiRes.error.details[0].message}` });
    }
    try {
        let encryptedPassword = await bcrypt_1.default.hash(req.body.password, 12);
        req.body.password = encryptedPassword;
        const newUser = await user_1.default.create(req.body);
    }
    catch (e) {
        return res.end(JSON.stringify({ message: "Error in creating User: ", e }));
    }
};
exports.default = {
    signup
};
