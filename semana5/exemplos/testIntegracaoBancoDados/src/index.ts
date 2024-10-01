import express, { Request, Response } from 'express'

export const app = express()

import { v4 as uuid4 } from 'uuid'

import slug from 'slug'


app.use(express.json())

interface Text {
    id: string
    title: string
    content: string
    slug: string
    created_at: string
    status: string
    author: string
}
const textsList: Text[] = []

app.post('/texts', (req: Request, res: Response) => {
    const { title, content, status, author } = req.body
    const newText: Text = {
        id: uuid4(),
        title: title,
        content: content,
        slug: slug(title),
        status: status,
        author: author,
        created_at: new Date().toLocaleDateString('pt-BR')
    }

    textsList.push(newText)
    res.status(201).json({ message: `Texto ${title} criado com sucesso` })


})



app.get('/texts', (req: Request, res: Response) => {
    res.json(textsList)
})

if (require.main === module) {
    const port = 333

    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost${port}`)
    })

}
