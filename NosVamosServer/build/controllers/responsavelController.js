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
class ResponsavelController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const responsavel = yield database_1.default.query('SELECT * FROM responsavel');
            res.json(responsavel);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO responsavel set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Responsavel Salvo' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const responsavel = yield database_1.default.query('SELECT * FROM responsavel where id_resp = ?', [id]);
            console.log(responsavel);
            if (responsavel.length > 0) {
                return res.json(responsavel[0]);
            }
            res.status(404).json({ text: "O responsavel não existe" });
        });
    }
    getByCPF(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cpf } = req.params;
            const responsavel = yield database_1.default.query('select * from responsavel where cpf_resp = ?', [cpf]);
            console.log(responsavel);
            if (responsavel.length > 0) {
                return res.json(responsavel[0]);
            }
            res.status(404).json({ text: "O Responsavel não existe" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE responsavel set ? WHERE id_resp = ?", [req.body, id]);
            res.json({ message: "O Responsavel foi editado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM responsavel WHERE id_resp = ?', [id]);
            res.json({ message: "O responsavel foi deletado" });
        });
    }
    loginResponsavel(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const {log} = req.params;
            const responsavel = yield database_1.default.query('select * from responsavel where EMAIL_RESP = ? and SENHA_RESP = ?', [req.body.email_resp, req.body.senha_resp]);
            if (responsavel.length == undefined) {
                res.json({ message: "Email ou senha incorretos" });
            }
            else if (responsavel.length < 0) {
                res.json({ message: "Email ou senha incorretos" });
                res.json(responsavel);
            }
            else if (responsavel.length > 0) {
                // res.json({message: "Usuario Logado"});
                return res.json(responsavel[0]);
            }
            res.status(404).json({ text: "Email ou senha Inválido", temEmail: false });
        });
    }
}
const responsavelController = new ResponsavelController();
exports.default = responsavelController;
