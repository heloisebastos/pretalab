import { addAbortListener } from 'events'
import { app } from './index'

import request from 'supertest'
import exp from 'constants'

describe('testando a rota Get', () => {
    it('Deve responder com Hello,Typescript + Express', async () => {
        const res = await request(app).get('/')
        expect(res.status).toBe(200)
        expect(res.text).toBe('Hello,Typescript + Express')
    })
})