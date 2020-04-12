import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { apiConfig, setApiPort, setDbUri } from '../shared/api.config';

setApiPort(process.env.PORT);
setDbUri(process.env.MONGODB_URI);

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.listen(apiConfig.apiPort);
}

bootstrap();