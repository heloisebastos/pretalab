import supertest from "supertest";
import { app } from "../../src/interface"; 
import mongoose from "mongoose";


const request = supertest(app);

describe("BookController Integration Tests", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDB conectado com sucesso!');
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it("should update a book", async () => { // cria um livro para atualizar
   
    const createResponse = await request.post("/books").send({
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      isbn: "978-0201616224",
      publisher: "Addison-Wesley",
      category: "Programming",
      status: "read",
    });

    const bookId = createResponse.body._id; // obtem o  ID do livro criado

    // atualiza o livro
    const updateResponse = await request.put(`/books/${bookId}`).send({
      title: "The Pragmatic Programmer (Updated)",
      author: "Andrew Hunt",
      isbn: "978-0201616224",
      publisher: "Addison-Wesley",
      category: "Programming",
      status: "read",
    });

    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body).toMatchObject({
      message: `Livro com ${bookId} alterado com sucesso`,
      bookUpdated: {
        title: "The Pragmatic Programmer (Updated)",
        author: "Andrew Hunt",
        isbn: "978-0201616224",
        publisher: "Addison-Wesley",
        category: "Programming",
        status: "read",
      },
    });
  });
});
