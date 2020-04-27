import {
    Controller,
    Body,
    Post,
    ValidationPipe,
    ConflictException,
    UnauthorizedException
} from '@nestjs/common';
import { apiConfig } from '../../shared/api.config';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from '../../shared/auth/auth-credentials.dto';
import { AuthTokenDto } from '../../shared/auth/auth-token.dto';
import { User } from '../../shared/models/user';

@Controller()
export class AuthController {

    constructor(private authService: AuthService) { }


    @Post(apiConfig.urlSignup)
    async signup(@Body(ValidationPipe) credentials: AuthCredentialsDto): Promise<void> {
        const createdUser = await this.authService.signup(credentials);
        if (!createdUser) {
            throw new ConflictException();
        }
        // const { _id, username } = await this.authService.signUp(authCredentials);
        // return { _id, username };
        //return await this.login(authCredentials);
    }


    @Post(apiConfig.urlLogin)
    async login(@Body(ValidationPipe) credentials: AuthCredentialsDto): Promise<AuthTokenDto> {
        const authTokenDto = await this.authService.login(credentials);
        if (!authTokenDto)
            throw new UnauthorizedException();

        return authTokenDto;
    }
}
