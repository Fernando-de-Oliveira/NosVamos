"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fotoController_1 = __importDefault(require("../controllers/fotoController"));
class FotoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', fotoController_1.default.list);
        this.router.get('/:id', fotoController_1.default.getOne);
        this.router.post('/', fotoController_1.default.create);
        this.router.put('/:id', fotoController_1.default.update);
        this.router.delete('/:id', fotoController_1.default.delete);
    }
}
const fotoRoutes = new FotoRoutes();
exports.default = fotoRoutes.router;
