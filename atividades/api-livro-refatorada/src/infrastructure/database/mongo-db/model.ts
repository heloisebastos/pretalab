import { model, Schema } from 'mongoose'


const BookSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  isbn: {
    type: String,
    require: true
  },
  publisher: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  cover: {
    type: String,
    require: false
  },
  status: {
    type: String,
    require: true
  },
  createdAt: {
    type: String,
    require: true
  }
})

export const BookModel = model('books', BookSchema)