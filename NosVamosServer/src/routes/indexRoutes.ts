import { Router } from 'express';
import { runInThisContext } from 'vm';

import indexController from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', indexController.index)
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;