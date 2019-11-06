import {Request, Response } from 'express';
// const pool = require('../database');
import pool from '../database';
 
class AudioController {
    
    public async list (req:Request, res: Response) {
        const audio =await pool.query('SELECT * FROM audio');
        res.json(audio);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO audio set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'audio Salvo'});
    }

    public async getOne(req: Request, res:Response ): Promise<any>{
        const {id} = req.params;
        const audio = await pool.query('SELECT * FROM audio where id_etapa = ?', [id])
        console.log(audio);
            if (audio.length>0){
                return res.json(audio[0]);
            }
        res.status(404).json({text: "O audio não existe"});
    }

    public async update (req: Request, res: Response):Promise<void>{
        const {id} =req.params;
        await pool.query("UPDATE audio set ? WHERE id_audio = ?", [req.body, id])
        res.json({message: "O audio foi editado"})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;        
        await pool.query('DELETE FROM audio WHERE id_audio = ?', [id]);
        res.json({message: "O audio foi deletado"});
    }

}

const audioController = new AudioController();
export default audioController;