import dotenv from 'dotenv'
dotenv.config();
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('MongoDb conectado com sucesso!');
  } catch (error) {
    console.log('Erro ao conectar no MongoDb', error);
  }
}