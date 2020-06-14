import { 
    PrimaryGeneratedColumn, 
    Column,
    Entity, 
    ManyToOne
} from 'typeorm';
import { Mapa } from './mapa.entity';

@Entity()
export class MapaParametro {
    @PrimaryGeneratedColumn()
    IdMapaParametro: number;

    @Column()
    Tipo: string;

    @Column()
    Valor: string;

    @ManyToOne(type => Mapa, mapa => mapa.MapaParametros)
    Mapa: Mapa;
}