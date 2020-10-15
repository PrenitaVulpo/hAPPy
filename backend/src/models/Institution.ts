import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './image';

@Entity('institutions')
export default class Institution{
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    name: string;
    @Column()
    latitude: number;
    @Column()
    longitude: number;
    @Column()
    about: string;
    @Column()
    instructions: string;
    @Column()
    opening_hours: string;
    @Column()
    open_on_weekends: boolean;
    @OneToMany(()=>Image, image=>image.institution, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'institution_id'})
    images: Image[];
}