import { DeleteBookUseCase } from '../../src/application/use-cases/delete-book-use-case';
import { BookRepository } from '../../src/application/repositories/book-repository';

describe('DeleteBookUseCase', () => {
  let deleteBookUseCase: DeleteBookUseCase;
  let mockBookRepository: BookRepository;

  beforeEach(() => {
    mockBookRepository = {
      delete: jest.fn(),
    } as any; 

    deleteBookUseCase = new DeleteBookUseCase(mockBookRepository);
  });

  it('deve excluir um livro passando o id como parametro', async () => {
    const bookId = '123';

    await deleteBookUseCase.execute(bookId);

    expect(mockBookRepository.delete).toHaveBeenCalledWith(bookId);
    expect(mockBookRepository.delete).toHaveBeenCalledTimes(1);
  });

  it('deve gerar um erro se o ID do livro não existir', async () => {
    const invalidBookId = '999';

    (mockBookRepository.delete as jest.Mock).mockRejectedValue(new Error('Livro não encontrado'));

    await expect(deleteBookUseCase.execute(invalidBookId)).rejects.toThrow('Livro não encontrado');
  });
});
