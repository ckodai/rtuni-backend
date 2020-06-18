import { 
    PrimaryGeneratedColumn, 
    Column,
    Entity, 
    OneToMany
} from 'typeorm';
import { Lugar } from './lugar.entity';

@Entity()
export class Area {
    @PrimaryGeneratedColumn()
    IdArea: number;

    @Column()
    Nombre: string;

    @Column()
    Observacion: string;

    @OneToMany(type => Lugar, lugar => lugar.Area)
    Lugares: Lugar[];
}