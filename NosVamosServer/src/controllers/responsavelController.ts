import {Request, Response } from 'express';
// const pool = require('../database');
import pool from '../database';
 
class ResponsavelController {
    
    public async list (req:Request, res: Response) {
        const responsavel =await pool.query('SELECT * FROM responsavel');
        res.json(responsavel);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO responsavel set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Responsavel Salvo'});
    }

    public async getOne(req: Request, res:Response ): Promise<any>{
        const {id} = req.params;
        const responsavel = await pool.query('SELECT * FROM responsavel where id_resp = ?', [id])
        console.log(responsavel);
            if (responsavel.length>0){
                return res.json(responsavel[0]);
            }
        res.status(404).json({text: "O responsavel não existe"});
    }

    public async update (req: Request, res: Response):Promise<void>{
        const {id} =req.params;
        await pool.query("UPDATE responsavel set ? WHERE id_resp = ?", [req.body, id])
        res.json({message: "O Responsavel foi editado"})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;        
        await pool.query('DELETE FROM responsavel WHERE id_resp = ?', [id]);
        res.json({message: "O responsavel foi deletado"});
    }

}

const responsavelController = new ResponsavelController();
export default responsavelController;