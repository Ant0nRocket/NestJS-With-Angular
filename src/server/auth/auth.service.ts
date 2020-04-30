import { Injectable, Logger } from '@nestjs/common';
import { UsersRepository } from '../db/users.repository';
import { AuthCredentialsDto } from '../../shared/auth/auth-credentials.dto';
import { User } from '../../shared/models/user';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { AuthTokenDto } from '../../shared/auth/auth-token.dto';
import { JwtPayload } from '../../shared/auth/jwt-payload';

@Injectable()
export class AuthService {

    private logger: Logger = new Logger('AuthService');

    /** 
     * Validated tokens stored here, so we don's have to
     * validate token on each request to server, just check
     * the set has provided token.
     */
    private knownAuthTokens: Set<string> = new Set();

    constructor(
        private usersRepository: UsersRepository
    ) { }

    async signup(credentials: AuthCredentialsDto): Promise<User> {
        const foundUser = await this.usersRepository.getUserBy(credentials);
        if (!foundUser) {
            // no users found, let's create new one
            const { username, email, phone, password } = credentials;
            const user: User = {
                username,
                email,
                phone
            }
            user.salt = await bcrypt.genSalt();
            const saltedPassword = credentials.password + user.salt;
            user.password = await bcrypt.hash(saltedPassword, user.salt);

            // bcrypt hash function addes salt in the begining of hash. Remove.
            user.password = user.password.replace(user.salt, '');

            return this.usersRepository.addUser(user);
        }
        return null;
    }


    async login(credentials: AuthCredentialsDto): Promise<AuthTokenDto> {
        const foundUser = await this.usersRepository.getUserBy(credentials);
        if (foundUser) {
            // user found, let's compare password hash
            const { password } = foundUser;
            const saltedPassword = credentials.password + foundUser.salt;
            let hashedPassword = await bcrypt.hash(saltedPassword, foundUser.salt);
            hashedPassword = hashedPassword.replace(foundUser.salt, '');
            if (password !== hashedPassword)
                return null;

            const payload: JwtPayload = {
                id: foundUser._id
            };
            const tokenDto: AuthTokenDto = {
                token: jwt.sign(payload, password, { expiresIn: '7d' })
            };
            return tokenDto;
        }
        return null;
    }


    /** Checks auth token (is it valid, not expired, user exists, etc.) */
    async isTokenValid(rawToken: string, tokenValidCallback?: (user: User) => void): Promise<boolean> {
        // rawToken can be found in this collection only if it was already validated
        if (this.knownAuthTokens.has(rawToken)) return true;

        const token = jwt.decode(rawToken);
        if (!token) {
            return false;
        }

        const { id } = token as JwtPayload;
        if (!id) {
            this.logger.error(`Auth token invalid: no user ID found`);
            return false;
        }

        const user = await this.usersRepository.getUserBy({ _id: id });
        if (!user) {
            this.logger.error(`No user found with ID ${id}`);
            return false;
        }

        // User password hash is a sign key for jwt, let's validate
        try {
            jwt.verify(rawToken, user.password);
            tokenValidCallback(user);
            this.knownAuthTokens.add(rawToken);
        } catch (err) {
            this.logger.error(`Invalid auth token provided. Removing it from cache (if exists).`);
            this.knownAuthTokens.delete(rawToken);
            return false;
        }

        return true;
    }
}
