import { Router } from 'express';
import { runInThisContext } from 'vm';

import enderecoController from '../controllers/enderecoController';

class EnderecoRoutes {

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', enderecoController.list);
        this.router.get('/:id', enderecoController.getOne);
        this.router.get('/endByResp/:id_resp', enderecoController.getByResp);
        this.router.post('/', enderecoController.create);
        this.router.put('/:id', enderecoController.update);
        this.router.delete('/:id', enderecoController.delete);
    }

}

const enderecoRoutes = new EnderecoRoutes();
export default enderecoRoutes.router;