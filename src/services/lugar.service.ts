import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lugar } from '../entities/lugar.entity';

@Injectable()
export class LugarService {
    constructor(
        @InjectRepository(Lugar)
        private lugarRepository: Repository<Lugar>
    ) {}

    async findAll(): Promise<Lugar[]> {
        return await this.lugarRepository.find();
    }

    async save(lugar: Lugar): Promise<Lugar> {
        return await this.lugarRepository.save(lugar);
    }

    async findOne(id: number): Promise<Lugar> {
        return await this.lugarRepository.findOne(id);
    }

    async remove(lugar: Lugar): Promise<void> {
        await this.lugarRepository.remove(lugar);
    }
}

export interface ILugarService {
    findAll(): Promise<Lugar[]>;
    save(lugar: Lugar): Promise<Lugar>;
    findOne(id: number): Promise<Lugar>;
    remove(id: number): Promise<void>;
}