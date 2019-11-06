import { Router } from 'express';
import { runInThisContext } from 'vm';

import fotoController from '../controllers/fotoController';

class FotoRoutes {

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', fotoController.list);
        this.router.get('/:id', fotoController.getOne);
        this.router.post('/', fotoController.create);
        this.router.put('/:id', fotoController.update);
        this.router.delete('/:id', fotoController.delete);
    }

}

const fotoRoutes = new FotoRoutes();
export default fotoRoutes.router;