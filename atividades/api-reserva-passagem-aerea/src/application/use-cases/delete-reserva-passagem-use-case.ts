import { ReservaPassagem } from "../../domain/reserva-passagem";
import { ReservaPassagemRepository } from "../repositories/reserva-passagem-repository";

export class DeleteReservaPassagemUseCase {
    constructor(
        private reservaPassagemRepository: ReservaPassagemRepository
    ) { }

    execute(id: string): Array<ReservaPassagem> {
        return this.reservaPassagemRepository.delete(id)
    }
}