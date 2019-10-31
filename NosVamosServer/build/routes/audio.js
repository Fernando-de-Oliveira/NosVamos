"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const audioController_1 = __importDefault(require("../controllers/audioController"));
class AudioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', audioController_1.default.list);
        this.router.get('/:id', audioController_1.default.getOne);
        this.router.post('/', audioController_1.default.create);
        this.router.put('/:id', audioController_1.default.update);
        this.router.delete('/:id', audioController_1.default.delete);
    }
}
const audioRoutes = new AudioRoutes();
exports.default = audioRoutes.router;
