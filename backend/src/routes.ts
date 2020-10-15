import {Router} from 'express';
import InstitutionController from './constrollers/institutionController'
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/institutions', upload.array('images'), InstitutionController.create)
routes.get('/institutions/:id', InstitutionController.show)
routes.get('/institutions', InstitutionController.index)

export default routes;