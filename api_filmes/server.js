const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const filmes = []

const getFilmes = router.get('/filmes', (req, res) => {
    res.status(200).json(filmes)
})


const createFilmes = router.post('/filmes/create', (req, res) => {
    const filme = {
        id: uuidv4(),
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    filmes.push(filme)

    res.status(201).json({ message: `Filme ${filme.title} criado com sucesso!` })
})

app.use(createFilmes)
app.use(getFilmes)

app.listen(3333, console.log('Servidor rodando com sucesso!'))