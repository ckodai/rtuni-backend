import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    OneToMany
} from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity()
export class Reporte {
    @PrimaryGeneratedColumn()
    IdReporte: number;

    @Column()
    Tipo: string;
    
    @Column()
    Path: number;

    @Column()
    Fecha: Date;

    @OneToMany(type => Usuario, usuario => usuario.Reporte)
    Usuarios: Usuario[];    
}