import { Router } from 'express';
import { runInThisContext } from 'vm';

import audioController from '../controllers/audioController';

class AudioRoutes {

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', audioController.list);
        this.router.get('/:id', audioController.getOne);
        this.router.post('/', audioController.create);
        this.router.put('/:id', audioController.update);
        this.router.delete('/:id', audioController.delete);
    }

}

const audioRoutes = new AudioRoutes();
export default audioRoutes.router;