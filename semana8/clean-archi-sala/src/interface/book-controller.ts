import { Request, Response } from 'express';
import { CreateBookUseCase } from '../application/use-cases/create-book-use-case';
import { ListAllBooksUseCase } from '../application/use-cases/list-all-books-use-case';
import { DeleteBookUseCase } from '../application/use-cases/delete-book-use-case';
import { UpdateBookUseCase } from '../application/use-cases/update-book-use-case';
import { Book } from '../domain/book';

export class BookController {
  constructor(
    private createBookUseCase: CreateBookUseCase,
    private listAllBooksUseCase: ListAllBooksUseCase,
    private updateBookUseCase: UpdateBookUseCase,
    private deleteBooksUseCase: DeleteBookUseCase
  ){}
  //seu codigo aqui
  create(req: Request, res: Response) {
    const params: Book = req.body;
    const book = this.createBookUseCase.execute(params);
    res.status(201).json(book);
  }

  async listAll(req: Request, res: Response) {
    const books = await this.listAllBooksUseCase.execute();
    res.json(books);
  }

  async update(req: Request, res: Response) {
    const params = req.body

    const { id } = req.params;

    console.log('executing update usecase...')
    const bookUpdated = await this.updateBookUseCase.execute(id, params);
    
    res.json({ message: `Livro com ${id} alterado com sucesso`, bookUpdated })
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const booksFiltered = await this.deleteBooksUseCase.execute(id);
    res.json({ message: `Livro com ${id} deletado com sucesso`, booksFiltered });
  }
}

