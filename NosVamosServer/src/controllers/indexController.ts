import {Request, Response } from 'express';

class IndexController {
    
    public index (req:Request ,res: Response) {
        res.json({text: 'Main API IS /api/responsavel'})
    }

}

const indexController = new IndexController();
export default indexController;