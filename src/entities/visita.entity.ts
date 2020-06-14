import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    ManyToOne
} from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Visita {
    @PrimaryGeneratedColumn()
    IdVisita: number;

    @Column()
    Observacion: string;

    @Column()
    Datetime: Date;

    @ManyToOne(type => Usuario, usuario => usuario.Visitas)
    Usuario: Usuario;
}