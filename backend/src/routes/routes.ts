import {Router} from 'express';
import {criarSala,entrarEmSala} from '../socket';

export const routes = Router();


//criar Sala
routes.post('/criarsala', criarSala)
routes.post('/room', entrarEmSala);