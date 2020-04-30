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
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../db/users.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
        this.logger = new common_1.Logger('AuthService');
    }
    signup(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.usersRepository.getUserBy(credentials);
            if (!foundUser) {
                const { username, email, phone, password } = credentials;
                const user = {
                    username,
                    email,
                    phone
                };
                user.salt = yield bcrypt.genSalt();
                const saltedPassword = credentials.password + user.salt;
                user.password = yield bcrypt.hash(saltedPassword, user.salt);
                user.password = user.password.replace(user.salt, '');
                return this.usersRepository.addUser(user);
            }
            return null;
        });
    }
    login(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.usersRepository.getUserBy(credentials);
            if (foundUser) {
                const { password } = foundUser;
                const saltedPassword = credentials.password + foundUser.salt;
                let hashedPassword = yield bcrypt.hash(saltedPassword, foundUser.salt);
                hashedPassword = hashedPassword.replace(foundUser.salt, '');
                if (password !== hashedPassword)
                    return null;
                const payload = {
                    id: foundUser._id
                };
                const tokenDto = {
                    token: jwt.sign(payload, password, { expiresIn: '7d' })
                };
                return tokenDto;
            }
            return null;
        });
    }
    isTokenValid(rawToken, tokenValidCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = jwt.decode(rawToken);
            if (!token) {
                return false;
            }
            const { id } = token;
            if (!id) {
                this.logger.error(`Auth token invalid: no user ID found`);
                return false;
            }
            const user = yield this.usersRepository.getUserBy({ _id: id });
            if (!user) {
                this.logger.error(`No user found with ID ${id}`);
                return false;
            }
            try {
                jwt.verify(rawToken, user.password);
                tokenValidCallback(user);
            }
            catch (err) {
                this.logger.error(`Invalid auth token provided`);
                return false;
            }
            return true;
        });
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map