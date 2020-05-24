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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
const api_config_1 = require("../api.config");
class AuthCredentialsDto {
    get hasSomeId() {
        if (!this.username)
            if (!this.email)
                if (!this.phone)
                    return undefined;
        return 1;
    }
    set id(id) {
        this.username = null;
        this.email = null;
        this.phone = null;
        if (class_validator_2.isEmail(id))
            this.email = id;
        else if (class_validator_2.isMobilePhone(id))
            this.phone = id;
        else
            this.username = id;
    }
    get id() {
        const id = this.username || this.email || this.phone;
        return id;
    }
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.Matches(api_config_1.apiConfig.usernameRegex, {
        message: `Username doesn't match the rule: ${api_config_1.apiConfig.usernameRegex}`
    }),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "username", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsMobilePhone(),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "phone", void 0);
__decorate([
    class_validator_1.IsNumber({}, { message: 'no username, email or phone found' }),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], AuthCredentialsDto.prototype, "hasSomeId", null);
__decorate([
    class_validator_1.Matches(api_config_1.apiConfig.passwordRegex, {
        message: `Password doesn't match the rule: ${api_config_1.apiConfig.passwordRegex}`
    }),
    __metadata("design:type", String)
], AuthCredentialsDto.prototype, "password", void 0);
exports.AuthCredentialsDto = AuthCredentialsDto;
