import { Book } from '../../domain/book';

export interface BookRepository {
 save(book: Book): Promise<void>;
 findAll(): Promise<Array<Book>>;
 update(id: string, params: Partial<Book>): Promise<Book | null>;
 delete(id: string): Promise<void>;
}