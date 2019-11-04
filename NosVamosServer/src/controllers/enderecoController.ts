import {Request, Response } from 'express';
import pool from '../database';
 
class EnderecoController {
    
    public async list (req:Request, res: Response) {
        const endereco =await pool.query('SELECT * FROM endereco');
        res.json(endereco);
    }

    public async create(req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO endereco set ?', [req.body]);
        console.log(req.body);
        res.json({message: 'endereco Salvo'});
    }

    public async getOne(req: Request, res:Response ): Promise<any>{
        const {id} = req.params;
        const endereco = await pool.query('SELECT * FROM endereco where id_end = ?', [id])
        console.log(endereco);
            if (endereco.length>0){
                return res.json(endereco[0]);
            }
        res.status(404).json({text: "O endereco não existe"});
    }

    public async getByResp(req: Request, res: Response):Promise<any>{
        const {id_resp} = req.params;
        const endereco = await pool.query('select * from endereco where id_resp = ?', [id_resp]);
        console.log(endereco);
        if (endereco.length>0){
            return res.json(endereco[0]);
        }
    res.status(404).json({text: "O endereco não existe"});
    }

    public async update (req: Request, res: Response):Promise<void>{
        const {id} =req.params;
        await pool.query("UPDATE endereco set ? WHERE id_end = ?", [req.body, id])
        res.json({message: "O endereco foi editado"})
    }

    public async delete(req: Request, res: Response): Promise<void>{
        const {id} = req.params;        
        await pool.query('DELETE FROM endereco WHERE id_end = ?', [id]);
        res.json({message: "O endereco foi deletado"});
    }

}

const enderecoController = new EnderecoController();
export default enderecoController;