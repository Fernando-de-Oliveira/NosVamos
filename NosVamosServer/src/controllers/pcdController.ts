import {Request, Response } from 'express';
import pool from '../database';
 
class PCDController {
    
    public async list (req:Request, res: Response) {
        const pcd =await pool.query('SELECT * FROM pcd');
        res.json(pcd);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO PCD set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'PCD Salvo'});
    }

    public async getOne(req: Request, res:Response ): Promise<any>{
        const {id} = req.params;
        const pcd = await pool.query('SELECT * FROM pcd where id_pcd = ?', [id])
        console.log(pcd);
            if (pcd.length>0){
                return res.json(pcd[0]);
            }
        res.status(404).json({text: "O PCD não existe"});
    }

    public async update (req: Request, res: Response):Promise<void>{
        const {id} =req.params;
        await pool.query("UPDATE PCD set ? WHERE id_pcd = ?", [req.body, id])
        res.json({message: "O PCD foi editado"})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;        
        await pool.query('DELETE FROM PCD WHERE id_pcd = ?', [id]);
        res.json({message: "O PCD foi deletado"});
    }

}

const pcdController = new PCDController();
export default pcdController;