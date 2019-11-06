"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const pool = require('../database');
const database_1 = __importDefault(require("../database"));
class FotoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const foto = yield database_1.default.query('SELECT * FROM foto');
            res.json(foto);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO foto set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Foto Salva' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const foto = yield database_1.default.query('SELECT * FROM foto where id_etapa = ?', [id]);
            console.log(foto);
            if (foto.length > 0) {
                return res.json(foto[0]);
            }
            res.status(404).json({ text: "A foto não existe" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE foto set ? WHERE id_foto = ?", [req.body, id]);
            res.json({ message: "A foto foi editada" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM foto WHERE id_foto = ?', [id]);
            res.json({ message: "A foto foi deletada" });
        });
    }
}
const fotoController = new FotoController();
exports.default = fotoController;
