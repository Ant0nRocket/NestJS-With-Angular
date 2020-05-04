import { Injectable } from "@nestjs/common";
import { Collection, ObjectId } from 'mongodb';
import { Connection } from "mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { IUserFull } from "../../shared/interfaces/user-full.interface";
import { IUserBase } from "../../shared/interfaces/user-base.interface";

@Injectable()
export class UsersRepository {

    private users: Collection<IUserFull>;

    constructor(@InjectConnection() private readonly mongo: Connection) {
        this.initUsersCollection();
    }

    async initUsersCollection(): Promise<void> {
        this.users = await this.mongo.createCollection('db.users');
    }

    /** Fill free to pass ObjectID, user name, phone or email here */
    async getUserBy(user: IUserBase): Promise<IUserFull> {

        const { username, email, phone, _id } = user;
        const searchRules = [];

        if (_id) searchRules.push({ _id: new ObjectId(_id) });
        if (username) searchRules.push({ username });
        if (email) searchRules.push({ email });
        if (phone) searchRules.push({ phone });

        const foundUser = await this.users.findOne({ $or: searchRules });

        if (foundUser)
            return foundUser;

        return null;
    }


    async addUser(user: IUserFull): Promise<IUserFull> {
        const foundUser = await this.getUserBy(user);
        if (foundUser) return foundUser;

        const result = await this.users.insertOne(user);
        if (result.insertedCount === 1)
            return user;

        return null;
    }
}