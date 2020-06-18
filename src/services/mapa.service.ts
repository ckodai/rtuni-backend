import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mapa } from '../entities/mapa.entity';

export class MapaService implements IMapaService {
    constructor(
        @InjectRepository(Mapa)
        private mapaRepository: Repository<Mapa>
    ) {}

    async findAll(): Promise<Mapa[]> {
        return await this.mapaRepository.find();
    }

    async save(mapa: Mapa): Promise<void> {
        await this.mapaRepository.save(mapa);
    }

    async remove(id: number): Promise<void> {
        await this.mapaRepository.delete(id);
    }

    changeMapStatus(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    setMapAsDefault(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }

}

export interface IMapaService {
    findAll(): Promise<Mapa[]>;
    save(mapa: Mapa): Promise<void>;
    remove(id: number): Promise<void>;
    changeMapStatus(id: number): Promise<void>;
    setMapAsDefault(id: number): Promise<void>;
}