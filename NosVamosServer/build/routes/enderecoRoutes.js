"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const enderecoController_1 = __importDefault(require("../controllers/enderecoController"));
class EnderecoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', enderecoController_1.default.list);
        this.router.get('/:id', enderecoController_1.default.getOne);
        this.router.get('/endByResp/:id_resp', enderecoController_1.default.getByResp);
        this.router.post('/', enderecoController_1.default.create);
        this.router.put('/:id', enderecoController_1.default.update);
        this.router.delete('/:id', enderecoController_1.default.delete);
    }
}
const enderecoRoutes = new EnderecoRoutes();
exports.default = enderecoRoutes.router;
