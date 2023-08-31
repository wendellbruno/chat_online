import {Router} from 'express';
import {criarSala} from '../socket';

export const routes = Router();


//criar Sala
routes.post('/criarsala', criarSala)