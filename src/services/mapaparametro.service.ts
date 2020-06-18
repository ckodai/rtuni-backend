import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MapaParametro } from '../entities/parametro.entity';

export class MapaParametroService implements IMapaParametroService {
    constructor(
        @InjectRepository(MapaParametro)
        private mapaRepository: Repository<MapaParametro>
    ) {}

    async findAll(): Promise<MapaParametro[]> {
        return await this.mapaRepository.find();
    }

    async save(mapa: MapaParametro): Promise<void> {
        await this.mapaRepository.save(mapa);
    }

    async remove(id: number): Promise<void> {
        await this.mapaRepository.delete(id);
    }

}

export interface IMapaParametroService {
    findAll(): Promise<MapaParametro[]>;
    save(mapa: MapaParametro): Promise<void>;
    remove(id: number): Promise<void>;
}