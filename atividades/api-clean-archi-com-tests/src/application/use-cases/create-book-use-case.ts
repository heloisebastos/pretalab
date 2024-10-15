import { Book } from '../../domain/book';
import { BookRepository } from '../repositories/book-repository';

export class CreateBookUseCase {
  //seu codigo aqui
  constructor(
    private bookRepository: BookRepository,
  ){}

  execute(bookParams: Partial<Book>): Book {
    const book = {
      createdAt: this.getDate(),
      ...bookParams
    } as Book;

    this.bookRepository.save(book);
    return book;
  } 

  private getDate() {
    return new Date().toLocaleDateString('PT-br');
  }
}
