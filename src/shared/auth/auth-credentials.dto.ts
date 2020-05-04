import { IsEmail, Matches, IsMobilePhone, IsOptional, IsNumber } from 'class-validator';
import { apiConfig } from '../api.config';
import { IUserFull } from '../interfaces/user-full.interface';


/** 
 * Pass username, email or phone number as user ID.
 * Password is password. 
 */
export class AuthCredentialsDto implements IUserFull {

    @IsOptional()
    @Matches(
        apiConfig.usernameRegex,
        {
            message:
                `Username doesn't match the rule: ${apiConfig.usernameRegex}`
        }
    )
    username?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsMobilePhone()
    phone?: string;

    @IsNumber({}, { message: "no username, email or phone found" })
    get hasSomeId(): number | undefined {
        if (!this.username)
            if (!this.email)
                if (!this.phone)
                    return undefined;

        return 1;
    }

    @Matches(
        apiConfig.passwordRegex,
        {
            message:
                `Password doesn't match the rule: ${apiConfig.passwordRegex}`
        }
    )
    password: string;

}