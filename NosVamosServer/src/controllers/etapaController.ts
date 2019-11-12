import {Request, Response } from 'express';
// const pool = require('../database');
import pool from '../database';
 
class EtapaController {
    
    public async list (req:Request, res: Response) {
        const etapa =await pool.query('SELECT * FROM etapa');
        res.json(etapa);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO etapa set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'Etapa Salva'});
    }

    public async etapaByIds(req: Request, res: Response): Promise<any>{
        // const {log} = req.params;
        const etapa =  await pool.query('select * from etapa where id_end_origem = ? and id_end_destino = ?', [req.body.logra_end, req.body.numero_end]);
        if (etapa.length == undefined){
            res.json({message: "etapa não encontrado"});
        }else if(etapa.length < 0)
        {
            res.json({message: "etapa não encontrado"});
            res.json(etapa);
        }else if(etapa.length > 0){
            return res.json(etapa[0]);
        }
        res.status(404).json({text: "etapa não existe"});
    }

    public async update (req: Request, res: Response):Promise<void>{
        const {id} =req.params;
        await pool.query("UPDATE etapa set ? WHERE id_etapa = ?", [req.body, id])
        res.json({message: "A etapa foi editada"})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;        
        await pool.query('DELETE FROM etapa WHERE id_etapa = ?', [id]);
        res.json({message: "A etapa foi deletada"});
    }

}

const etapaController = new EtapaController();
export default etapaController;