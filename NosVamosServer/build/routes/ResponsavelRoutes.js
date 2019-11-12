"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const responsavelController_1 = __importDefault(require("../controllers/responsavelController"));
class ResponsavelRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', responsavelController_1.default.list);
        this.router.get('/:id', responsavelController_1.default.getOne);
        // this.router.get('/getbyCPF/:cpf', responsavelController.getByCPF)
        this.router.post('/', responsavelController_1.default.create);
        this.router.put('/:id', responsavelController_1.default.update);
        this.router.delete('/:id', responsavelController_1.default.delete);
        this.router.post('/login/', responsavelController_1.default.loginResponsavel);
    }
}
const responsavelRoutes = new ResponsavelRoutes();
exports.default = responsavelRoutes.router;
