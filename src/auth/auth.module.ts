import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { SysuserService } from '../services/Sysuser.service';

import { LocalStrategy } from './local.strategy';
import { AppController } from '../controllers/app.controller';

import { SysUser } from 'src/entities/sysuser.entity';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([SysUser]),
        PassportModule.register({defaultStrategy: 'jwt'}),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1d' }
        })
    ],
    providers: [
        AuthService,
        SysuserService,
        LocalStrategy,
        JwtStrategy
    ],
    controllers: [AppController]
})
export class AuthModule {}