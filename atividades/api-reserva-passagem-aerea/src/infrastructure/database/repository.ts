import { ReservaPassagemRepository } from "../../application/repositories/reserva-passagem-repository";
import { ReservaPassagem } from "../../domain/reserva-passagem";

export class Repository implements ReservaPassagemRepository {

  private reservasPassagens: ReservaPassagem[] = []

  save(reservaPassagem: ReservaPassagem): void {
    this.reservasPassagens.push(reservaPassagem)
  }

  findAll(): ReservaPassagem[] {
    return this.reservasPassagens
  }

  update(id: string, reservaPassagemParams: Partial<ReservaPassagem>): ReservaPassagem | null {
    console.log(`Parametros recebidos: ${JSON.stringify(reservaPassagemParams)}`)
    const reservaPassagemUpdate = this.reservasPassagens.find(reservaPassagem => reservaPassagem.idReserva === id);
    console.log(`reserva de passagem encontrada: ${JSON.stringify(reservaPassagemUpdate)}`)

    if (reservaPassagemUpdate) {
      const updatedReservaPassagem = {
        ...reservaPassagemUpdate,
        ...reservaPassagemParams
      };

      console.log(`A reserva de passagem atualizada: ${JSON.stringify(reservaPassagemUpdate)}`)
      const index = this.reservasPassagens.findIndex(reservaPassagem => reservaPassagem.idReserva === id);
      this.reservasPassagens[index] = updatedReservaPassagem;

      return updatedReservaPassagem;
    }
    return null;
  }


  delete(id: string): ReservaPassagem[] {
    const filteredReservaPassagem = this.reservasPassagens.filter(buscaReservaPassagem => buscaReservaPassagem.idReserva !== id)
    return filteredReservaPassagem
  }


}