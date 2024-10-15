import { randomUUID } from "crypto";
import { UserRepository } from "../../repositories/user-repository";

export class CreateUserUseCase {
    constructor(
        private userRepository: UserRepository
    ) { }

    async execute(email: string) {
        const user = {
            id: randomUUID(),
            email
        };

        await this.userRepository.save(user);
        return user;
    }
}