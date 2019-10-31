import { Router } from 'express';
import { runInThisContext } from 'vm';

import responsavelController from '../controllers/responsavelController';

class ResponsavelRoutes {

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config():void{
        this.router.get('/', responsavelController.list);
        this.router.get('/:id', responsavelController.getOne)
        this.router.get('/getbyCPF/:cpf', responsavelController.getByCPF)
        this.router.post('/', responsavelController.create);
        this.router.put('/:id', responsavelController.update);
        this.router.delete('/:id', responsavelController.delete);
        this.router.post('/login/', responsavelController.loginResponsavel);
    }

}

const responsavelRoutes = new ResponsavelRoutes();
export default responsavelRoutes.router;