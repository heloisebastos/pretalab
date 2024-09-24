import express from 'express';
import { configureDependencies } from '../infrastructure/utils/config'

export const app = express();
app.use(express.json());


const { reservaPassagemController } = configureDependencies();
app.post('/reservar-passagem', (req, res) => reservaPassagemController.create(req, res))
app.get('/reservas-passagens', (req, res) => reservaPassagemController.listAll(req, res))
app.patch('/atualiza-reserva-passagem/:id', (req, res) => reservaPassagemController.update(req, res))
app.delete('/delete-reserva-passagem/:id', (req, res) => reservaPassagemController.delete(req, res))

if (require.main === module) {
    const PORT = 3333;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    })
}