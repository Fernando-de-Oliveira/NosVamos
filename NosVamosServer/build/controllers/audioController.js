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
class AudioController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const audio = yield database_1.default.query('SELECT * FROM audio');
            res.json(audio);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO audio set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'audio Salvo' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const audio = yield database_1.default.query('SELECT * FROM audio where id_resp = ?', [id]);
            console.log(audio);
            if (audio.length > 0) {
                return res.json(audio[0]);
            }
            res.status(404).json({ text: "O audio não existe" });
        });
    }
    getByCPF(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf } = req.params;
            const audio = yield database_1.default.query('select * from audio where cpf_resp = ?', [cpf]);
            console.log(audio);
            if (audio.length > 0) {
                return res.json(audio[0]);
            }
            res.status(404).json({ text: "O audio não existe" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE audio set ? WHERE id_resp = ?", [req.body, id]);
            res.json({ message: "O audio foi editado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM audio WHERE id_resp = ?', [id]);
            res.json({ message: "O audio foi deletado" });
        });
    }
}
const audioController = new AudioController();
exports.default = audioController;
