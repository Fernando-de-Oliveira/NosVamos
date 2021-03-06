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
const database_1 = __importDefault(require("../database"));
class EnderecoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const endereco = yield database_1.default.query('SELECT * FROM endereco');
            res.json(endereco);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO endereco set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'endereco Salvo' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const endereco = yield database_1.default.query('SELECT * FROM endereco where id_end = ?', [id]);
            console.log(endereco);
            if (endereco.length > 0) {
                return res.json(endereco[0]);
            }
            res.status(404).json({ text: "O endereco não existe" });
        });
    }
    getByResp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_resp } = req.params;
            const endereco = yield database_1.default.query('select * from endereco where id_resp = ?', [id_resp]);
            console.log(endereco);
            if (endereco.length > 0) {
                return res.json(endereco[0]);
            }
            res.status(404).json({ text: "O endereco não existe" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE endereco set ? WHERE id_end = ?", [req.body, id]);
            res.json({ message: "O endereco foi editado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM endereco WHERE id_end = ?', [id]);
            res.json({ message: "O endereco foi deletado" });
        });
    }
    endByLogra(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const {log} = req.params;
            const endereco = yield database_1.default.query('select * from endereco where logra_end = ? and numero_end = ?', [req.body.logra_end, req.body.numero_end]);
            if (endereco.length == undefined) {
                res.json({ message: "Logradouro ou numero incorretos" });
            }
            else if (endereco.length < 0) {
                res.json({ message: "Logradouro ou numero incorretos" });
                res.json(endereco);
            }
            else if (endereco.length > 0) {
                return res.json(endereco[0]);
            }
            res.status(404).json({ text: "Logradouro ou numero Inválido" });
        });
    }
}
const enderecoController = new EnderecoController();
exports.default = enderecoController;
