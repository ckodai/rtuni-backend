import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lugar } from './entities/lugar.entity';

import { LugarService } from './services/lugar.service';

import { LugarController } from './controllers/lugar.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        Lugar
    ])],
    providers: [
        LugarService
    ],
    controllers: [
        LugarController
    ]
})
export class FeaturesModule {}