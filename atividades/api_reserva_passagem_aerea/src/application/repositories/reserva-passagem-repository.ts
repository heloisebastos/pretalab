import { ReservaPassagem } from "../../domain/reserva-passagem";

export interface ReservaPassagemRepository {
    save(reservaPassagem: ReservaPassagem): void;
}