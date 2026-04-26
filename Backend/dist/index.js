"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
if (process.env.DATABASE) {
    mongoose_1.default.connect(process.env.DATABASE)
        .then(() => console.log("MongoDB connected successfully!!"))
        .catch(() => console.log("Error occored in connecting to database"));
}
else {
    console.log("DATABASE not present in ENV!");
}
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use('/api/user', userRoutes_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Server is listning at port ${process.env.PORT}`);
});
