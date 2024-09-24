import { Request, Response } from 'express';
import { CreateReservaPassagemUseCase } from '../application/use-cases/create-reserva-passagem-use-case';
import { ListAllReservaPassagemUseCase } from '../application/use-cases/list-all-books-use-case';
import { UpdateReservaPassagemUseCase } from '../application/use-cases/update-reserva-passagem-use-case';
import { DeleteReservaPassagemUseCase } from '../application/use-cases/delete-reserva-passagem-use-case';
export interface CreateReservaDTO {
  status: boolean;
  preco: number;
  nomeUsuario: string;
  cpf: string;
  origemVoo: string;
  destinoVoo: string;
  dataVoo: Date;
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
    private createReservaPassagem: CreateReservaPassagemUseCase,
    private listAllReservaPassagem: ListAllReservaPassagemUseCase,
    private updateReservaPassagem: UpdateReservaPassagemUseCase,
    private deleteReservaPassagem: DeleteReservaPassagemUseCase,
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

  listAll(req: Request, res: Response) {
    const reservaPassagem = this.listAllReservaPassagem.execute();
    res.json(reservaPassagem)
  }

  update(req: Request, res: Response) {
    const params = req.body
    const { id } = req.params;

    console.log('entrando updateusecase')
    const reservaPassagemUpdated = this.updateReservaPassagem.execute(id, params)

    res.json({ message: `Passagem com ${id} alterado com sucesso`, reservaPassagemUpdated })


  }

  delete(req: Request, res: Response) {
    const { id } = req.params;
    const booksFiltered = this.deleteReservaPassagem.execute(id);
    res.json({ message: `Livro com ${id} deletado com sucesso`, booksFiltered });
  }


}


