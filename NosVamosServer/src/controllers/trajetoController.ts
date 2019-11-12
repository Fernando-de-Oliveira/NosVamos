import {Request, Response } from 'express';
// const pool = require('../database');
import pool from '../database';
 
class TrajetoController {
    
    public async list (req:Request, res: Response) {
        const trajeto =await pool.query('SELECT * FROM trajeto');
        res.json(trajeto);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO trajeto set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Trajeto Salvo'});
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

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;        
        await pool.query('DELETE FROM trajeto WHERE id_trajeto = ?', [id]);
        res.json({message: "O trajeto foi deletado"});
    }

    public async trajetoByIds(req: Request, res: Response): Promise<any>{
        // const {log} = req.params;
        const trajeto =  await pool.query('select * from trajeto where id_end_origem = ? and id_end_destino = ?', [req.body.logra_end, req.body.numero_end]);
        if (trajeto.length == undefined){
            res.json({message: "Trajeto não encontrado"});
        }else if(trajeto.length < 0)
        {
            res.json({message: "Trajeto não encontrado"});
            res.json(trajeto);
        }else if(trajeto.length > 0){
            return res.json(trajeto[0]);
        }
        res.status(404).json({text: "Trajeto não existe"});
    }

}

const trajetoController = new TrajetoController();
export default trajetoController;