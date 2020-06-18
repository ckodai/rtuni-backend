import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Area } from '../entities/area.entity';

@Injectable()
export class AreaService implements IAreaService {
    constructor(
        @InjectRepository(Area)
        private areaRepository: Repository<Area>
    ) {}

    async findAll(): Promise<Area[]> {
        return await this.areaRepository.find();
    }

    async save(area: Area): Promise<void> {
        await this.areaRepository.save(area);
    }

    async remove(id: number): Promise<void> {
        await this.areaRepository.delete(id);
    }

    async findByName(nombre: string): Promise<Area | undefined> {
        return await this.areaRepository.findOne({
            where: {
                Nombre: nombre
            }
        });
    }

    async findById(id: number): Promise<Area | undefined> {
        return await this.areaRepository.findOne(id);
    }

    changeAreaStatus(id: number): Promise<void> {
        throw new Error("Methods not implemented!");
    }
}


export interface IAreaService {
    findAll(): Promise<Area[]>;
    save(area: Area): Promise<void>;
    remove(id: number): Promise<void>;
    findByName(nombre: string): Promise<Area | undefined>;
    findById(id: number): Promise<Area | undefined>;
    changeAreaStatus(id: number): Promise<void>;
}