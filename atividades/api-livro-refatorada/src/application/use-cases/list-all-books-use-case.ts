import { Book } from '../../domain/book';
import { BookRepository } from '../repositories/book-repository';

export class ListAllBooksUseCase {
  constructor(
    private bookRepository: BookRepository
  ) {}

  async execute(): Promise<Array<Book>> {
    return await this.bookRepository.findAll();
  }

}