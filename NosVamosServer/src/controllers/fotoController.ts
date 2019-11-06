import {Request, Response } from 'express';
// const pool = require('../database');
import pool from '../database';
 
class FotoController {
    
    public async list (req:Request, res: Response) {
        const foto =await pool.query('SELECT * FROM foto');
        res.json(foto);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO foto set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Foto Salva'});
    }

    public async getOne(req: Request, res:Response ): Promise<any>{
        const {id} = req.params;
        const foto = await pool.query('SELECT * FROM foto where id_etapa = ?', [id])
        console.log(foto);
            if (foto.length>0){
                return res.json(foto[0]);
            }
        res.status(404).json({text: "A foto não existe"});
    }

    public async update (req: Request, res: Response):Promise<void>{
        const {id} =req.params;
        await pool.query("UPDATE foto set ? WHERE id_foto = ?", [req.body, id])
        res.json({message: "A foto foi editada"})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;        
        await pool.query('DELETE FROM foto WHERE id_foto = ?', [id]);
        res.json({message: "A foto foi deletada"});
    }

}

const fotoController = new FotoController();
export default fotoController;