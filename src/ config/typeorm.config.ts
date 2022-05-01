import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'mush0000',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true
}