"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT;
const gameRoomRoutes = require('./routes/gameRoomRoutes');
//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});
// GET routes
app.get('/', (req, res) => {
    res.json('Welcome');
});
// requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
