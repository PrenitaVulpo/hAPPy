import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Institution from '../models/Institution';

export default {
    async index(request:Request, response:Response){
        const institutionRepository = getRepository(Institution);
        const institutions = await institutionRepository.find({
            relations: ['images']
        });
        return response.json(institutions)
    },
    async show(request:Request, response:Response){
        const {id} = request.params;
        const institutionRepository = getRepository(Institution);
        const institution = await institutionRepository.findOneOrFail(id, {
            relations: ['images']
        });
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
        //Getting the images
        const requestImages = request.files as Express.Multer.File[];
        const images = requestImages.map(image =>{
            return {path: image.filename}
        })
        //images where saved on the last variable
        const institution = institutionRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            images
        });
    
        await institutionRepository.save(institution);
        return response.status(201).json(institution)
    }
}