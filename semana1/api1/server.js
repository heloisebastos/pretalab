const express = require('express')
const router = express.Router()
const nomes = require('./dados.json')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const ola = router.get('/ola', (req, res) => {
    res.send('Ola,brasil')
})

const alunas = router.get('/nomes', (req, res) => {
    res.json(nomes)
})

app.use(ola)
app.use(alunas)
app.use(ola)

app.listen(3333, () => console.log('Servidor rodando com sucesso'))


