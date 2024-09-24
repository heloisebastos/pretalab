import { ReservaPassagem } from "../../domain/reserva-passagem";
import { ReservaPassagemRepository } from "../repositories/reserva-passagem-repository";

export class ListAllReservaPassagemUseCase {
    constructor(
        private reservaRepository: ReservaPassagemRepository
    ) { }

    execute(): Array<ReservaPassagem> {
        const reservaPassagem = this.reservaRepository.findAll()
        return reservaPassagem
    }
}