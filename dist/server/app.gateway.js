"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const shortid = require("shortid");
const websockets_theme_enum_1 = require("../shared/websockets/websockets-theme.enum");
const api_config_1 = require("../shared/api.config");
const auth_service_1 = require("./auth/auth.service");
let AppGateway = class AppGateway {
    constructor(authService) {
        this.authService = authService;
        this.logger = new common_1.Logger('AppGateway', true);
    }
    afterInit() {
        this.logger.log('Websocket started.');
    }
    handleConnection(client, ...args) {
        client.id = shortid.generate();
        client.onmessage = (ev) => {
            if (ev.data) {
                try {
                    const dto = JSON.parse(ev.data);
                    this.handleDto(client, dto);
                }
                catch (_a) {
                    this.logger.warn(`Hacker attack detected. Message is: ${ev.data}`);
                }
            }
            else {
                client.send('');
            }
        };
        this.logger.log(`Client connected: ${client.id}`);
        this.send2Client(client, websockets_theme_enum_1.WebSocketsTheme.ClientConnected);
        client.disconnectTimer = setTimeout(() => {
            this.send2Client(client, websockets_theme_enum_1.WebSocketsTheme.Unauthorized);
            client.close();
        }, api_config_1.apiConfig.socketAuthDelay);
    }
    handleDisconnect(client) {
        client.onmessage = null;
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    handleDto(client, dto) {
        if (!client.userId &&
            dto.theme !== websockets_theme_enum_1.WebSocketsTheme.AuthenticateWithToken)
            return;
        switch (dto.theme) {
            case websockets_theme_enum_1.WebSocketsTheme.SendBackData: {
                this.send2Client(client, dto.theme, dto.content, dto.cid);
                break;
            }
            case websockets_theme_enum_1.WebSocketsTheme.AuthenticateWithToken: {
                this.handleClientAuthentication(client, dto);
                break;
            }
            default: {
                this.send2Client(client, websockets_theme_enum_1.WebSocketsTheme.BadDto, dto);
                break;
            }
        }
    }
    send2Client(client, theme, content = {}, cid = '') {
        const dto = {
            cid,
            theme,
            content
        };
        client.send(JSON.stringify(dto));
    }
    handleClientAuthentication(client, dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenIsValid = yield this.authService
                .isTokenValid(dto.content, (user) => {
                client.userId = user._id;
            });
            if (tokenIsValid) {
                clearTimeout(client.disconnectTimer);
                this.logger.log(`Client ${client.id} authorized. User is ${client.userId}`);
            }
            else {
                this.logger.error(`Token of client ${client.id} is invalid`);
            }
        });
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", Object)
], AppGateway.prototype, "server", void 0);
AppGateway = __decorate([
    common_1.Injectable(),
    websockets_1.WebSocketGateway(null, { path: api_config_1.apiConfig.urlWebSocket }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AppGateway);
exports.AppGateway = AppGateway;
