import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('institutions')
export default class Institution{
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    about: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: boolean;
}