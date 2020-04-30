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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const common_1 = require("@nestjs/common");
const api_config_1 = require("../../shared/api.config");
const auth_service_1 = require("./auth.service");
const auth_credentials_dto_1 = require("../../shared/auth/auth-credentials.dto");
const auth_token_dto_1 = require("../../shared/auth/auth-token.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdUser = yield this.authService.signup(credentials);
            if (!createdUser) {
                throw new common_1.ConflictException();
            }
            return this.authService.login(credentials);
        });
    }
    login(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const authTokenDto = yield this.authService.login(credentials);
            if (!authTokenDto)
                throw new common_1.UnauthorizedException();
            return authTokenDto;
        });
    }
    checkToken(authTokenDto) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.authService.isTokenValid(authTokenDto.token)) {
                return authTokenDto;
            }
            else {
                throw new common_1.UnauthorizedException();
            }
        });
    }
};
__decorate([
    common_1.Post(api_config_1.apiConfig.urlSignup),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signup", null);
__decorate([
    common_1.Post(api_config_1.apiConfig.urlLogin),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_credentials_dto_1.AuthCredentialsDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post(api_config_1.apiConfig.urlTokenCheck),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_token_dto_1.AuthTokenDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "checkToken", null);
AuthController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map