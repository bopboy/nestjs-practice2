import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './ config/typeorm.config';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [BoardsModule, TypeOrmModule.forRoot(typeORMConfig)],
})
export class AppModule { }
