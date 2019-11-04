"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pcdController_1 = __importDefault(require("../controllers/pcdController"));
class PCDRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pcdController_1.default.list);
        this.router.get('/:id', pcdController_1.default.getOne);
        this.router.post('/', pcdController_1.default.create);
        this.router.put('/:id', pcdController_1.default.update);
        this.router.delete('/:id', pcdController_1.default.delete);
    }
}
const pcdRoutes = new PCDRoutes();
exports.default = pcdRoutes.router;
