"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const app_gateway_1 = require("./app.gateway");
const auth_module_1 = require("./auth/auth.module");
const db_module_1 = require("./db/db.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'client')
            }),
            db_module_1.DbModule,
            auth_module_1.AuthModule,
        ],
        controllers: [],
        providers: [
            app_gateway_1.AppGateway
        ]
    })
], AppModule);
exports.AppModule = AppModule;
