import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';
import { apiConfig, setApiPort, setDbUri } from '../shared/api.config';

setApiPort(process.env.PORT);
setDbUri(process.env.MONGODB_URI);

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // CORS must be enabled if <host:port> of client doesn't match server.
    // For example Angular dev server runs at port 4200, backend on 3000.
    // Without CORS enabled requests will be blocked.
    app.enableCors();

    // By default NestJS provides web sockets functionality via Socket.IO
    // library. IMO, 'ws' library (and build-in ws functionality of browsers)
    // are better.
    app.useWebSocketAdapter(new WsAdapter(app));
    await app.listen(apiConfig.apiPort);
}

bootstrap();