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
const mongodb_1 = require("mongodb");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UsersRepository = class UsersRepository {
    constructor(mongo) {
        this.mongo = mongo;
        this.initUsersCollection();
    }
    initUsersCollection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.users = yield this.mongo.createCollection('db.users');
        });
    }
    getUserBy(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, phone, _id } = user;
            const searchRules = [];
            if (_id)
                searchRules.push({ _id: new mongodb_1.ObjectId(_id) });
            if (username)
                searchRules.push({ username });
            if (email)
                searchRules.push({ email });
            if (phone)
                searchRules.push({ phone });
            const foundUser = yield this.users.findOne({ $or: searchRules });
            if (foundUser)
                return foundUser;
            return null;
        });
    }
    addUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundUser = yield this.getUserBy(user);
            if (foundUser)
                return foundUser;
            const result = yield this.users.insertOne(user);
            if (result.insertedCount === 1)
                return user;
            return null;
        });
    }
};
UsersRepository = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectConnection()),
    __metadata("design:paramtypes", [mongoose_1.Connection])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map