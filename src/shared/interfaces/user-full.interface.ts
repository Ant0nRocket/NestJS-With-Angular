import { IUserBase } from "./user-base.interface";

/** 
 * Extends IUserBase by adding password and salt.  
 * Usefull in auth credentials and database storings.
 */
export interface IUserFull extends IUserBase {
    password?: string;
    salt?: string;
}