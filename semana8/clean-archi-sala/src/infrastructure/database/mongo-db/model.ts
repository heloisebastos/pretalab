// vai definir as regras da criacao de um livro, vira uma classe pra ser instanciada 
//e cria a regra de como a collection la no MongoDB

import { model, Schema } from 'mongoose'

//-> Um livro é um Document
//-> Uma coleção de livros - collection
//-> Quando a primeira chamada de criar um livro acontecer, a collection será criada automaticamente no MongoDB
//-> cria automaticamente o ID quando um Document é criado

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

const UserSchme = new Schema ({
  email: {
    
  }
})

const UserSchema = new Schema({
  email: {
    type: String,
    require: true
  }
})


export const BookModel = model('books', BookSchema)
export const UserModel = model('users', UserSchema)
