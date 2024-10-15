import mongoose from "mongoose";
import supertest from "supertest";
import {app} from "../../src/interface";
import { randomUUID } from "crypto";
import { Repository } from "../../src/infrastructure/database/mongo-db/repository";

const request = supertest(app);
const bookRepository = new Repository();

describe("ListAllBooks", () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI as string);
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it("should return a empty list of all books", async () => {
    const response = await request.get("/books");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject([]);
  });

  it("should return a list with all books registered", async () => {
    const mockBooks = [
      {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        isbn: "978-0201616224",
        publisher: "Addison-Wesley",
        category: "Programming",
        status: "read",
      },
      {
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        isbn: "978-0201616224",
        publisher: "Addison-Wesley",
        category: "Programming",
        status: "read",
      },
    ];
    for (const book of mockBooks) {
      await request.post("/books").send(book);
    }

    const response = await request.get("/books");

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject(mockBooks);
  });
});