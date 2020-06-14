import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { Ubicacion } from './ubicacion.entity';
import { Mapa } from './mapa.entity';
import { Area } from './area.entity';

@Entity()
export class Lugar {
    @PrimaryGeneratedColumn()
    IdLugar: number;

    @Column()
    Nombre: string;

    @Column()
    Observacion: string;

    @Column("smallint")
    Estado: number;

    @Column()
    Imagen: string;

    @ManyToOne(type => Ubicacion, ubicacion => ubicacion.Lugares)
    Ubicacion: Ubicacion;

    @ManyToOne(type => Area, area => area.Lugares)
    Area: Area;

    @ManyToOne(type => Mapa, mapa => mapa.Lugares)
    Mapa: Mapa;

}