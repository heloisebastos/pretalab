import { ReservaPassagem } from '../../domain/reserva-passagem'
import { ReservaPassagemRepository } from '../repositories/reserva-passagem-repository'
import { IdGenerator } from '../repositories/id-generation-interface'

interface Params {
    //idReserva: string;
    status: boolean;
    preco: number;
    nomeUsuario: string;
    //idUsuario: string;
    cpf: string;
    origemVoo: string;
    destinoVoo: string;
    dataVoo: Date;
    //dataEmissaoPassagem: string;
    horarioPartida: string;

}

export class CreateReservaPassagem {
    constructor(
        private reservaPassagemRepository: ReservaPassagemRepository,
        private idGenerator: IdGenerator
    ) {

    }

    execute(reservaPassagemParams: Params): ReservaPassagem {
        const reservaPassagem: ReservaPassagem = {
            idReserva: this.getId(),
            dataEmissaoPassagem: this.getDate(),
            idUsuario: this.getId(),
            ...reservaPassagemParams
        }

        this.reservaPassagemRepository.save(reservaPassagem);
        return reservaPassagem
    }

    private getDate() {
        return new Date().toLocaleDateString('PT-br');
    }

    private getId() {
        return this.idGenerator.generate();
    }
}
