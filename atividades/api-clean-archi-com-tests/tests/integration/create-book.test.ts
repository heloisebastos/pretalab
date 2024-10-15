import supertest from 'supertest';
import {app} from '../../src/interface';
import mongoose from 'mongoose';

const request = supertest(app);

describe('BookController Integration - Create', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI as string);
  });

  afterEach(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('should create a new book', async () => {
    const response = await request.post('/books').send({
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      isbn: "978-0201616224",
      publisher: "Addison-Wesley",
      category: "Programming",
      status: "read",
    });

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      title: "The Pragmatic Programmer",
      author: "Andrew Hunt",
      isbn: "978-0201616224",
      publisher: "Addison-Wesley",
      category: "Programming",
      status: "read",
    });
  });
});
