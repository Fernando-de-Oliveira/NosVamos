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
class EtapaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const etapa = yield database_1.default.query('SELECT * FROM etapa');
            res.json(etapa);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO etapa set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Etapa Salva' });
        });
    }
    etapaByIds(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const {log} = req.params;
            const etapa = yield database_1.default.query('select * from etapa where id_end_origem = ? and id_end_destino = ?', [req.body.logra_end, req.body.numero_end]);
            if (etapa.length == undefined) {
                res.json({ message: "etapa não encontrado" });
            }
            else if (etapa.length < 0) {
                res.json({ message: "etapa não encontrado" });
                res.json(etapa);
            }
            else if (etapa.length > 0) {
                return res.json(etapa[0]);
            }
            res.status(404).json({ text: "etapa não existe" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE etapa set ? WHERE id_etapa = ?", [req.body, id]);
            res.json({ message: "A etapa foi editada" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM etapa WHERE id_etapa = ?', [id]);
            res.json({ message: "A etapa foi deletada" });
        });
    }
}
const etapaController = new EtapaController();
exports.default = etapaController;
