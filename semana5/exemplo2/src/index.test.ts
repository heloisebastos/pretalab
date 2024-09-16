import request from 'supertest'
import { app } from './index'

describe('testando API de blog', () => {


    describe('sucesso', () => {
        it('Deve ser capaz de criar um novo texto ', async () => {
            const response = await request(app).post('/texts').send({
                title: 'Meu primeiro texto',
                content: 'conteudo do texto',
                status: 'rascunho',
                author: 'Helo',
            })

            expect(response.status).toBe(201)
            expect(response.body.message).toBe('Texto Meu primeiro texto criado com sucesso')
        })


        it('Deve ser capaz listar os textos', async () => {
            const response = await request(app).get('/texts')

            expect(response.status).toBe(200)
            expect(response.body.length).toBeGreaterThanOrEqual(1)
        })

    })

})