const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')

const slug = require('slug')

const textsList = []

const blogRouter = express.Router()
const app = express()
const PORT = 3333

app.use(express.json())
app.use(cors())

blogRouter.post('/texts', (req, res) => {
    const { title, content, status, author } = req.body
    const newTexts = {
        id: uuidv4(),
        title: title,
        content: content,
        slug: slug.title,
        created_at: new Date().toLocaleDateString('pt-BR'),
        status: status,
        author: author
    }

    textsList.push(newTexts)
    res.status(201).json({ message: `Texto ${title} criado com sucesso` })

})

blogRouter.get('/texts', (req, res) => {
    res.json(textsList)
})

blogRouter.get('/text', (req, res) => {
    const id = req.query.id
    const textFound = textsList.find(text => text.id === id)
    res.json(textFound)
})


blogRouter.patch('/text/:id', (req, res) => {
    const { id } = req.params
    const { title, content, status, author } = req.body

    const textFound = textsList.find(text => text.id === id)

    if (!textFound) {
        return res.status(404).json({ message: `Texto com o ${id} não encontrado` })
    }

    if (title != null) {
        textFound.title = title
    }

    if (content != null) {
        textFound.content = content
    }

    if (status != null) {
        textFound.status = status
    }

    if (author != null) {
        textFound.author = author
    }

    res.json({ message: `Texto com o ${id} editado com sucesso` })
})


blogRouter.delete('/text/:id', (req, res) => {
    const { id } = req.params

    const listUpdated = textsList.filter(text => text.id !== id)

    res.json(listUpdated)
})


app.use(blogRouter)
app.listen(PORT, console.log(`Servidor rodando com sucesso ${PORT}`))