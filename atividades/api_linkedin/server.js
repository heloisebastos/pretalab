const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require('uuid')
const slug = require('slug')

const postsList = []

const linkedinRouter = express.Router()
const app = express()
const PORT = 3333

app.use(express.json())
app.use(cors())

linkedinRouter.post('/linkedin/post', (req, res) => {
    const { content, format } = req.body
    const newPost = {
        id: uuidv4(),
        content: content,
        format: format,
        created_at: new Date().toLocaleDateString('pt-BR'),
    }

    postsList.push(newPost)
    res.status(201).json({ message: `Postagem ${newPost.id} criado com sucesso` })

})

linkedinRouter.get('/linkedin/posts', (req, res) => {
    res.json(postsList)
})


linkedinRouter.get('/linkedin/post', (req, res) => {
    const id = req.query.id;
    const postFound = postsList.find(post => post.id === id);

    if (!postFound) {
        return res.status(404).json({ message: 'Postagem não encontrada' });
    }
    res.json(postFound);
});


linkedinRouter.delete('/linkedin/:id', (req, res) => {
    const { id } = req.params
    const listUpdated = postsList.filter(post => post.id !== id)
    res.json(listUpdated)
})

app.use(linkedinRouter)
app.listen(PORT, console.log(`Servidor rodando com sucesso ${PORT}`))