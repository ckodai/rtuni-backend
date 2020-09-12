import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Visita } from '../entities/visita.entity';

@Injectable()
export class VisitaService {
    constructor(
        @InjectRepository(Visita)
        private visitaRepository: Repository<Visita>
    ) {}

    async findAll(): Promise<Visita[]> {
        return await this.visitaRepository.find();
    }

    async save(visita: Visita): Promise<Visita> {
        return await this.visitaRepository.save(visita);
    }

    async findOne(id: number): Promise<Visita> {
        return await this.visitaRepository.findOne(id);
    }

    async remove(visita: Visita): Promise<void> {
        await this.visitaRepository.remove(visita);
    }
}