import { Router } from 'express';
import { runInThisContext } from 'vm';

import etapaController from '../controllers/etapaController';

class EtapaRoutes {

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', etapaController.list);
        // this.router.get('/:id', etapaController.getOne)
        this.router.post('/', etapaController.create);
        // this.router.put('/:id', etapaController.update);
        this.router.delete('/:id', etapaController.delete);
        this.router.post('/etapaByIds/', etapaController.etapaByIds);
    }

}

const etapaRoutes = new EtapaRoutes();
export default etapaRoutes.router;