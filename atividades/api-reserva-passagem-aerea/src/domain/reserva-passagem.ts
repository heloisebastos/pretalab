export interface ReservaPassagem {
    idReserva: string;
    status: boolean;
    preco: number;
    nomeUsuario: string;
    idUsuario: string;
    cpf: string;
    origemVoo: string;
    destinoVoo: string;
    dataVoo: Date;
    dataEmissaoPassagem: string;
    horarioPartida: string;
}
