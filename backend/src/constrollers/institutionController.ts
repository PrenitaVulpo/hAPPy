import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Institution from '../models/Institution';

export default {
    async index(request:Request, response:Response){
        const institutionRepository = getRepository(Institution);
        const institutions = await institutionRepository.find();
        return response.json(institutions)
    },
    async show(request:Request, response:Response){
        const {id} = request.params;
        const institutionRepository = getRepository(Institution);
        const institution = await institutionRepository.findOneOrFail(id);
        return response.json(institution)
    },
    async create(request:Request, response:Response){
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
    }
}