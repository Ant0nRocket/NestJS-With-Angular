import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { apiConfig } from '../shared/api.config';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client')
        }),
        MongooseModule.forRoot(apiConfig.dbUri, {
            connectionName: apiConfig.dbConnectionName,
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true 
        })
    ],
    controllers: [ AppController ]
})
export class AppModule {}