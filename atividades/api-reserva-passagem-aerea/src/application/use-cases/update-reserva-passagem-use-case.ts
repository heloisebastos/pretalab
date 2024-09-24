import { ReservaPassagem } from "../../domain/reserva-passagem";
import { ReservaPassagemRepository } from "../repositories/reserva-passagem-repository";

export class UpdateReservaPassagemUseCase {

    constructor(
        private reservaPassagemRepository: ReservaPassagemRepository
    ) { }

    execute(id: string, bodyParams: Partial<ReservaPassagem>) {
        console.log('entrou no use case')
        return this.reservaPassagemRepository.update(id, bodyParams);
    }

}