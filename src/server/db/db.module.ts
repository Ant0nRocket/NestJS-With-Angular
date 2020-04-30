import { Module, Global } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { apiConfig } from '../../shared/api.config';

@Global()
@Module({
    imports: [
        MongooseModule.forRoot(apiConfig.dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }),
    ],
    providers: [
        UsersRepository,
    ],
    exports: [
        UsersRepository,
    ]
})
export class DbModule { }
