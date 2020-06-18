import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../entities/usuario.entity';

@Injectable()
export class UsuarioService implements IUsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) {}

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async save(Usuario: Usuario): Promise<void> {
        await this.usuarioRepository.save(Usuario);
    }

    async remove(id: number): Promise<void> {
        await this.usuarioRepository.delete(id);
    }
}


export interface IUsuarioService {
    findAll(): Promise<Usuario[]>;
    save(usuario: Usuario): Promise<void>;
    remove(id: number): Promise<void>;
}