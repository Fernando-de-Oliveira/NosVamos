"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const etapaController_1 = __importDefault(require("../controllers/etapaController"));
class EtapaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', etapaController_1.default.list);
        // this.router.get('/:id', etapaController.getOne)
        this.router.post('/', etapaController_1.default.create);
        // this.router.put('/:id', etapaController.update);
        this.router.delete('/:id', etapaController_1.default.delete);
        this.router.post('/etapaByIds/', etapaController_1.default.etapaByIds);
    }
}
const etapaRoutes = new EtapaRoutes();
exports.default = etapaRoutes.router;
