import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Institution from '../models/Institution';
import InstitutionView from '../views/institutions_view';
import * as Yup from 'yup';

export default {
    async index(request:Request, response:Response){
        const institutionRepository = getRepository(Institution);
        const institutions = await institutionRepository.find({
            relations: ['images']
        });
        return response.json(InstitutionView.renderMany(institutions))
    },
    async show(request:Request, response:Response){
        const {id} = request.params;
        const institutionRepository = getRepository(Institution);
        const institution = await institutionRepository.findOneOrFail(id, {
            relations: ['images']
        });
        return response.json(InstitutionView.render(institution))
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
        const data = { 
          name,
          latitude,
          longitude,
          about,
          instructions,
          opening_hours,
          open_on_weekends: open_on_weekends === 'true',
          images
       }
        const schema = Yup.object().shape({
          name: Yup.string().required(),
          latitude: Yup.number().required(),
          longitude: Yup.number().required(),
          about: Yup.string().required().max(300),
          instructions: Yup.string().required(),
          opening_hours: Yup.string().required(),
          open_on_weekends: Yup.boolean().required(),
          images: Yup.array(
            Yup.object().shape({
              path: Yup.string().required()
            })
          )
        })

        await schema.validate(data, {abortEarly: false});

        const institution = institutionRepository.create(data);
    
        await institutionRepository.save(institution);
        return response.status(201).json(institution)
    }
}