import { NestFactory } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

import * as compression from 'compression';

// Logging of environment variables could help with mLab errors %)
const logger: Logger = new Logger('App');
logger.log(`process.env.PORT = ${process.env.PORT}`);
logger.log(`process.env.MONGODB_URI = ${process.env.MONGODB_URI}`);

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	// CORS must be enabled if <host:port> of client doesn't match server.
	// For example Angular dev server runs at port 4200, backend on 3000.
	// Without CORS enabled requests will be blocked.
	app.enableCors();

	// If no proxy with compression then keep this enabled.
	// But if your Nginx (or what do you use as proxy server) deal with the
	// compression itself - comment line below.
	app.use(compression());

	// By default NestJS provides web sockets functionality via Socket.IO
	// library. IMO, 'ws' library (and build-in ws functionality of browsers)
	// are better.
	app.useWebSocketAdapter(new WsAdapter(app));
	await app.listen(process.env.PORT || 3000);
}

bootstrap();
