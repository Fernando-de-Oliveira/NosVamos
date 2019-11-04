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
class PCDController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pcd = yield database_1.default.query('SELECT * FROM pcd');
            res.json(pcd);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO PCD set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'PCD Salvo' });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pcd = yield database_1.default.query('SELECT * FROM pcd where id_pcd = ?', [id]);
            console.log(pcd);
            if (pcd.length > 0) {
                return res.json(pcd[0]);
            }
            res.status(404).json({ text: "O PCD não existe" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query("UPDATE PCD set ? WHERE id_pcd = ?", [req.body, id]);
            res.json({ message: "O PCD foi editado" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM PCD WHERE id_pcd = ?', [id]);
            res.json({ message: "O PCD foi deletado" });
        });
    }
}
const pcdController = new PCDController();
exports.default = pcdController;
