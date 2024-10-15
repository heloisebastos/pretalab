import supertest from "supertest";  // Importa a biblioteca supertest
import { app } from "../../src/interface";  // Importa a aplicação Express
import mongoose from "mongoose";  // Importa o mongoose para interagir com o MongoDB

const request = supertest(app);  // Inicializa o supertest com a aplicação

describe("BookController Integration Tests", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB conectado com sucesso!');
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it("should delete a book", async () => {
    // Criar um livro para deletar
    const createResponse = await request.post("/books").send({
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      isbn: "978-0201616224",
      publisher: "Addison-Wesley",
      category: "Programming",
      status: "read",
    });

    const bookId = createResponse.body._id; // Obtém o ID do livro criado

    // Deletar o livro
    const deleteResponse = await request.delete(`/books/${bookId}`);

    expect(deleteResponse.status).toBe(200);
    expect(deleteResponse.body).toMatchObject({
      message: `Livro com ${bookId} deletado com sucesso`,
    });
  });
});
