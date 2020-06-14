import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { Usuario } from './usuario.entity';
import { Lugar } from './lugar.entity';

@Entity()
export class Ubicacion {
    @PrimaryGeneratedColumn()
    IdUbicacion: number;

    @Column()
    Datetime: Date;

    @Column()
    Location: string;

    @ManyToOne(type => Usuario, usuario => usuario.Ubicaciones)
    Usuario: Usuario;

    @OneToMany(type => Lugar, lugar => lugar.Ubicacion)
    Lugares: Lugar[];
}