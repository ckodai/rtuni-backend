import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import * as ormconfig from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { FeaturesModule } from './Features.module';

@Module({
  imports: [
    AuthModule,
    MulterModule.register({
      dest: './files'
    }),
    TypeOrmModule.forRoot(ormconfig),
    FeaturesModule
  ]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
