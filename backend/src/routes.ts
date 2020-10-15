import {Router} from 'express';
import {getRepository} from 'typeorm';
import Institution from './models/Institution';

const routes = Router();

routes.post('/institutions', async (request, response) => {
    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body;

    const institutionRepository = getRepository(Institution);
    const institution = institutionRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    });

    await institutionRepository.save(institution);
    return response.status(201).json(institution)
    
})

export default routes;