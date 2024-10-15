import { UpdateBookUseCase } from '../../src/application/use-cases/update-book-use-case';
import { BookRepository } from '../../src/application/repositories/book-repository';
import { Book } from '../../src/domain/book';

describe('UpdateBookUseCase', () => {
  let updateBookUseCase: UpdateBookUseCase;
  let mockBookRepository: jest.Mocked<BookRepository>;

  beforeEach(() => {
    mockBookRepository = {
      update: jest.fn()
    } as unknown as jest.Mocked<BookRepository>;

    updateBookUseCase = new UpdateBookUseCase(mockBookRepository);
  });

  it('deve chamar a atualização do repositório com os parâmetros corretos e retornar o livro atualizado', async () => {
    const bookId = '1';
    const updateParams: Partial<Book> = {
      title: 'Seja Uma Dev Backend com JavaScript',
    };

    const updatedBook: Book = {
      id: bookId,
      title: 'Seja Uma Dev Backend',
      author: 'Heloise Bastos',
      isbn: '123-4567890123',
      publisher: 'Brasilience',
      category: 'Tecnologia',
      status: 'read',
      createdAt: '07-10-2024',
    };

    mockBookRepository.update.mockResolvedValue(updatedBook);

    const result = await updateBookUseCase.execute(bookId, updateParams);

    expect(mockBookRepository.update).toHaveBeenCalledWith(bookId, updateParams);
    expect(result).toEqual(updatedBook);
  });

  it('deve retornar nulo se o livro não for encontrado', async () => {
    const bookId = '1';
    const updateParams: Partial<Book> = { title: 'Seja Uma Dev Backend com JavaScript' };

    mockBookRepository.update.mockResolvedValue(null);

    const result = await updateBookUseCase.execute(bookId, updateParams);

    expect(result).toBeNull();
  });
});
