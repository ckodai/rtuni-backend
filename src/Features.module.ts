import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lugar } from './entities/lugar.entity';

import { LugarService } from './services/lugar.service';

import { LugarController } from './controllers/lugar.controller';
import { UbicacionService } from './services/ubicacion.service';
import { Ubicacion } from './entities/ubicacion.entity';
import { Visita } from './entities/visita.entity';
import { VisitaService } from './services/visita.service';
import { VisitaController } from './controllers/visita.controller';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        Lugar,
        Ubicacion,
        Visita,
        Usuario
    ])],
    providers: [
        LugarService,
        UbicacionService,
        VisitaService,
        UsuarioService
    ],
    controllers: [
        LugarController,
        VisitaController,
        UsuarioController
    ]
})
export class FeaturesModule {}