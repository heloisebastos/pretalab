import { Repository } from "../database/repository";
import { CreateReservaPassagem } from "../../application/use-cases/create-reserva-passagem-use-case";
import { IdentifierGenerator } from "./id-gerenator";
import { ReservaPassagemController } from "../../interface/reserva-passagem-controller";

export function configureDependencies() {

    const ReservaPassagemRepository = new Repository();
    const idGenerator = new IdentifierGenerator();
    const createReservaPassagemUseCase = new CreateReservaPassagem(ReservaPassagemRepository, idGenerator);
    const reservaPassagemController = new ReservaPassagemController(createReservaPassagemUseCase);

    return {
        reservaPassagemController
    };
}


