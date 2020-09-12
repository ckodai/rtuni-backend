import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ubicacion } from '../entities/ubicacion.entity';

@Injectable()
export class UbicacionService {
    constructor(
        @InjectRepository(Ubicacion)
        private ubicacionRepository: Repository<Ubicacion>
    ) {}

    async findAll(): Promise<Ubicacion[]> {
        return await this.ubicacionRepository.find();
    }

    async save(ubicacion: Ubicacion): Promise<Ubicacion> {
        return await this.ubicacionRepository.save(ubicacion);
    }

    async findOne(id: number): Promise<Ubicacion> {
        return await this.ubicacionRepository.findOne(id);
    }

    async remove(ubicacion: Ubicacion): Promise<void> {
        await this.ubicacionRepository.remove(ubicacion);
    }
}