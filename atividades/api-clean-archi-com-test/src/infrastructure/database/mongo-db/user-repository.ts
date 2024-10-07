import { UserRepository } from "../../../application/repositories/user-repository";
import { User } from "../../../domain/user";
import { UserModel } from "./model";

export class Repository implements UserRepository {
    async save(user: User): Promise<void> {
        const newUser = new UserModel(user);
        await newUser.save();
    }
}