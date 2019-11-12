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
class TrajetoController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const trajeto = yield database_1.default.query('SELECT * FROM trajeto');
            res.json(trajeto);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO trajeto set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Trajeto Salvo' });
        });
    }
    // public async getOne(req: Request, res:Response ): Promise<any>{
    //     const {id} = req.params;
    //     const trajeto = await pool.query('SELECT * FROM trajeto where id_end_origem = ? and id_end_destino = ?', [id])
    //     console.log(trajeto);
    //         if (trajeto.length>0){
    //             return res.json(trajeto[0]);
    //         }
    //     res.status(404).json({text: "O trajeto não existe"});
    // }
    // public async update (req: Request, res: Response):Promise<void>{
    //     const {id} =req.params;
    //     await pool.query("UPDATE trajeto set ? WHERE id_trajeto = ?", [req.body, id])
    //     res.json({message: "O trajeto foi editado"})
    // }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM trajeto WHERE id_trajeto = ?', [id]);
            res.json({ message: "O trajeto foi deletado" });
        });
    }
    trajetoByIds(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // const {log} = req.params;
            const trajeto = yield database_1.default.query('select * from trajeto where id_end_origem = ? and id_end_destino = ?', [req.body.logra_end, req.body.numero_end]);
            if (trajeto.length == undefined) {
                res.json({ message: "Trajeto não encontrado" });
            }
            else if (trajeto.length < 0) {
                res.json({ message: "Trajeto não encontrado" });
                res.json(trajeto);
            }
            else if (trajeto.length > 0) {
                return res.json(trajeto[0]);
            }
            res.status(404).json({ text: "Trajeto não existe" });
        });
    }
}
const trajetoController = new TrajetoController();
exports.default = trajetoController;
