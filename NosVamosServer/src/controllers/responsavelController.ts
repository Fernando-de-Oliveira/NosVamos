import {Request, Response } from 'express';
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

    public async loginResponsavel(req: Request, res: Response): Promise<any>{
        // const {log} = req.params;
        const responsavel =  await pool.query('select * from responsavel where EMAIL_RESP = ? and SENHA_RESP = ?', [req.body.email_resp, req.body.senha_resp]);
        if (responsavel.length == undefined){
            res.json({message: "Email ou senha incorretos"});
        }else if(responsavel.length < 0)
        {
            res.json({message: "Email ou senha incorretos"});
            res.json(responsavel);
        }else if(responsavel.length > 0){
            // res.json({message: "Usuario Logado"});
            return res.json(responsavel[0]);
        }
        res.status(404).json({text: "Email ou senha Inválido",temEmail: false});
    }

}

const responsavelController = new ResponsavelController();
export default responsavelController;