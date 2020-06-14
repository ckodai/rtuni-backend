import { 
    PrimaryGeneratedColumn, 
    Column, 
    Entity,
    OneToMany
} from 'typeorm';
import { Lugar } from './lugar.entity';
import { MapaParametro } from './parametro.entity';

@Entity()
export class Mapa {
    @PrimaryGeneratedColumn()
    IdMapa: number;

    @Column()
    EstiloUrl: string;

    @Column()
    DefaultLocation: string;

    @Column("float")
    DefaultZoom: number;

    @OneToMany(type => Lugar, lugar => lugar.Mapa)
    Lugares: Lugar[];

    @OneToMany(type => MapaParametro, mapaParametro => mapaParametro.Mapa)
    MapaParametros: MapaParametro[];
}