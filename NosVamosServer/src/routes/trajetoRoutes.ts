import { Router } from 'express';
import { runInThisContext } from 'vm';

import trajetoController from '../controllers/trajetoController';

class TrajetoRoutes {

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', trajetoController.list);
        // this.router.get('/:id', trajetoController.getOne)
        this.router.post('/', trajetoController.create);
        // this.router.put('/:id', trajetoController.update);
        this.router.delete('/:id', trajetoController.delete);
        this.router.post('/trajetoByIds/', trajetoController.trajetoByIds);
    }

}

const trajetoRoutes = new TrajetoRoutes();
export default trajetoRoutes.router;