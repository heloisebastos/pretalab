import { ReservaPassagem } from "../../domain/reserva-passagem";

export interface ReservaPassagemRepository {
    save(reservaPassagem: ReservaPassagem): void;
    findAll(): ReservaPassagem[];
    update(id: string, reservaPassagemParams: Partial<ReservaPassagem>): ReservaPassagem | null
    delete(id: string): ReservaPassagem[];
}