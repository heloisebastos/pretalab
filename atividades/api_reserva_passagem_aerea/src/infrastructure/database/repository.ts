import { ReservaPassagemRepository } from "../../application/repositories/reserva-passagem-repository";
import { ReservaPassagem } from "../../domain/reserva-passagem";

export class Repository implements ReservaPassagemRepository {

    private reservaPassagem: ReservaPassagem[] = []

    save(reservaPassagem: ReservaPassagem): void {
        this.reservaPassagem.push(reservaPassagem)
    }
}

/*
export class Repository implements BookRepository {

  private books: Book[] = []

  save(book: Book): void {
    this.books.push(book)
  }
  findAll(): Book[] {
    return this.books
  }
} */