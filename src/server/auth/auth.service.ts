import { Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from '../db/users.repository';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { AuthTokenDto } from '../../shared/auth/auth-token.dto';
import { IUserFull } from '../../shared/interfaces/user-full.interface';
import { IUserBase } from '../../shared/interfaces/user-base.interface';

@Injectable()
export class AuthService {

    private logger: Logger = new Logger('AuthService');

    constructor(
        private usersRepository: UsersRepository
    ) { }

    async signup(credentials: IUserFull): Promise<IUserFull> {
        const foundUser = await this.usersRepository.getUserBy(credentials);
        if (!foundUser) {
            // no users found, let's create new one
            const { username, email, phone, password } = credentials;
            const user: IUserFull = {
                username,
                email,
                phone
            }
            user.salt = await bcrypt.genSalt();
            const saltedPassword = password + user.salt;
            user.password = await bcrypt.hash(saltedPassword, user.salt);

            // bcrypt hash function addes salt in the begining of hash. Remove.
            user.password = user.password.replace(user.salt, '');

            return this.usersRepository.addUser(user);
        }
        return null;
    }


    async login(credentials: IUserFull): Promise<AuthTokenDto> {
        const foundUser = await this.usersRepository.getUserBy(credentials);
        if (foundUser) {
            // user found, let's compare password hash
            const { password } = foundUser;
            const saltedPassword = credentials.password + foundUser.salt;
            let hashedPassword = await bcrypt.hash(saltedPassword, foundUser.salt);
            hashedPassword = hashedPassword.replace(foundUser.salt, '');
            if (password !== hashedPassword)
                return null;

            const payload: IUserBase = {
                _id: foundUser._id,
                username: foundUser.username,
                email: foundUser.email,
                phone: foundUser.phone,
            };
            const tokenDto: AuthTokenDto = {
                token: jwt.sign(payload, password, { expiresIn: '7d' })
            };
            return tokenDto;
        }
        return null;
    }


    /** Checks auth token (is it valid, not expired, user exists, etc.) */
    async isTokenValid(rawToken: string, tokenValidCallback?: (user: IUserBase) => void): Promise<boolean> {

        const token = jwt.decode(rawToken);
        if (!token) {
            return false;
        }

        const { _id } = token as IUserBase;
        if (!_id) {
            this.logger.error(`Auth token invalid: no user ID found`);
            return false;
        }

        const user = await this.usersRepository.getUserBy({ _id });
        if (!user) {
            this.logger.error(`No user found with ID ${_id}`);
            return false;
        }

        // User password hash is a sign key for jwt, let's validate
        try {
            jwt.verify(rawToken, user.password);
            tokenValidCallback(user);
        } catch (err) {
            this.logger.error(`Invalid auth token provided`);
            return false;
        }

        return true;
    }
}
