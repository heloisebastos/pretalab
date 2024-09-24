import { Repository } from "../database/repository";
import { CreateReservaPassagemUseCase } from "../../application/use-cases/create-reserva-passagem-use-case";
import { IdentifierGenerator } from "./id-gerenator";
import { ReservaPassagemController } from "../../interface/reserva-passagem-controller";
import { ListAllReservaPassagemUseCase } from "../../application/use-cases/list-all-books-use-case";
import { UpdateReservaPassagemUseCase } from "../../application/use-cases/update-reserva-passagem-use-case";

export function configureDependencies() {

    const reservaPassagemRepository = new Repository();
    const idGenerator = new IdentifierGenerator();

    const createReservaPassagemUseCase = new CreateReservaPassagemUseCase(reservaPassagemRepository, idGenerator);
    const listAllReservaPassagem = new ListAllReservaPassagemUseCase(reservaPassagemRepository);
    const updateReservaPassagem = new UpdateReservaPassagemUseCase(reservaPassagemRepository);
    const reservaPassagemController = new ReservaPassagemController(createReservaPassagemUseCase, listAllReservaPassagem, updateReservaPassagem);

    return {
        reservaPassagemController
    };
}


