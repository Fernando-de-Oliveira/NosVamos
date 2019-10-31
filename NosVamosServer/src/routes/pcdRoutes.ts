import { Router } from 'express';
import { runInThisContext } from 'vm';

import pcdController from '../controllers/pcdController';

class PCDRoutes {

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', pcdController.list);
        this.router.get('/:id', pcdController.getOne);
        this.router.post('/', pcdController.create);
        this.router.put('/:id', pcdController.update);
        this.router.delete('/:id', pcdController.delete);
    }

}

const pcdRoutes = new PCDRoutes();
export default pcdRoutes.router;