import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import * as ormconfig from './ormconfig';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(ormconfig)
  ]
})
export class AppModule {
  constructor(private connection: Connection) {}
}
