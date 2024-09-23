import { Request, Response } from 'express';
import { CreateReservaPassagem } from '../application/use-cases/create-reserva-passagem-use-case';


export interface CreateReservaDTO {
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

interface ReservaPassagemDTO {
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

export class ReservaPassagemController {
  constructor(
    private createReservaPassagem: CreateReservaPassagem
  ) { }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const reservaPassagemData: CreateReservaDTO = req.body;
      const reservaPassagem = this.createReservaPassagem.execute(reservaPassagemData);
      res.status(201).json(reservaPassagem);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}


/*
export class BookController {
  constructor(
    private createBookUseCase: CreateBookUseCase,
    private listAllBookUseCase: ListAllBooksUseCase
  ) { }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const bookData: CreateBookDTO = req.body;
      const book = this.createBookUseCase.execute(bookData);
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }


  listAll(req: Request, res: Response) {
    const books = this.listAllBookUseCase.execute();
    res.json(books)
  }
} */