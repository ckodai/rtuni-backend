import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { Reporte } from './reporte.entity';
import { Ubicacion } from './ubicacion.entity';
import { Visita } from './visita.entity';

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    IdUsuario: number;

    @Column()
    Edad: number;
    
    @Column()
    Origen: number;

    @Column()
    Nombre: string;
 
    @Column()
    Clasificacion: string;

    @ManyToOne(type => Reporte, reporte => reporte.Usuarios)
    Reporte: Reporte;

    @OneToMany(type => Ubicacion, ubicacion => ubicacion.Usuario)
    Ubicaciones: Ubicacion[];

    @OneToMany(type => Visita, visita => visita.Usuario)
    Visitas: Visita[];
}