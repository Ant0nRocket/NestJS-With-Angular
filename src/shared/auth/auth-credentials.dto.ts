import { IsEmail, Matches, IsMobilePhone, IsOptional, IsBooleanString, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { apiConfig } from '../api.config';
import { User } from '../models/user';


/** Pass username, email or phone number as user ID.
 * Password is password. */
export class AuthCredentialsDto implements User {

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