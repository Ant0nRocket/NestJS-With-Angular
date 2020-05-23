import { IsEmail, Matches, IsMobilePhone, IsOptional, IsNumber } from 'class-validator';
import { isEmail, isMobilePhone } from 'class-validator';
import { apiConfig } from '../api.config';
import { IUserFull } from '../interfaces/user-full.interface';

/** 
 * Pass username, email or phone number as user ID.
 * Password is password. 
 */
export class AuthCredentialsDto implements IUserFull {
	@IsOptional()
	@Matches(apiConfig.usernameRegex, {
		message: `Username doesn't match the rule: ${apiConfig.usernameRegex}`
	})
	username?: string;

	@IsOptional()
	@IsEmail()
	email?: string;

	@IsOptional()
	@IsMobilePhone()
	phone?: string;

	@IsNumber({}, { message: 'no username, email or phone found' })
	get hasSomeId(): number | undefined {
		if (!this.username) if (!this.email) if (!this.phone) return undefined;

		return 1;
	}

	@Matches(apiConfig.passwordRegex, {
		message: `Password doesn't match the rule: ${apiConfig.passwordRegex}`
	})
	password: string;

	//-----------------
	// Magic with ID :)

	public set id(id: string) {
		this.username = null;
		this.email = null;
		this.phone = null;

		if (isEmail(id)) this.email = id;
		else if (isMobilePhone(id)) this.phone = id;
		else this.username = id;
	}

	public get id() {
		const id = this.username || this.email || this.phone;
		return id;
	}
}
