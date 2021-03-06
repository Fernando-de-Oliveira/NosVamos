"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trajetoController_1 = __importDefault(require("../controllers/trajetoController"));
class TrajetoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', trajetoController_1.default.list);
        // this.router.get('/:id', trajetoController.getOne)
        this.router.post('/', trajetoController_1.default.create);
        // this.router.put('/:id', trajetoController.update);
        this.router.delete('/:id', trajetoController_1.default.delete);
        this.router.post('/trajetoByIds/', trajetoController_1.default.trajetoByIds);
    }
}
const trajetoRoutes = new TrajetoRoutes();
exports.default = trajetoRoutes.router;
