import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SysUser } from '../entities/sysuser.entity';

@Injectable()
export class SysuserService {
    constructor(
        @InjectRepository(SysUser)
        private sysuserRepository: Repository<SysUser>
    ) {}

    findAll(): Promise<SysUser[]> {
        return this.sysuserRepository.find();
    }

    async save(sysUser: SysUser): Promise<void> {
        await this.sysuserRepository.save(sysUser);
    }

    findOne(username: string): Promise<SysUser | undefined> {
        return this.sysuserRepository.findOne(
            {
                where: {
                    Username: username
                }
            }
        );
    }

    async remove(id: number): Promise<void> {
        await this.sysuserRepository.delete(id);
    }
}