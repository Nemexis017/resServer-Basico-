import express from 'express';
import { 
    usuarioGet, 
    usuarioPost, 
    usuarioPut, 
} from '../controllers/usuarios.js'  

const { Router } = express;
const routes = Router();

routes.get('/', usuarioGet)
routes.post('/', usuarioPost)
routes.put('/', usuarioPut)

export { routes }