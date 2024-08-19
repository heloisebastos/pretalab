const express = require('express')
const routerDisciplinas = express.Router()
const cors = require('cors')
const PORT = 3333

const { v4: uuidv4 } = require('uuid');


const app = express()
app.use(express.json())
app.use(cors())

const list_Disciplinas = []

// const disciplinas = {
//     id: 1,
//     nome: 'api',
//     modulo: 'semana 1'
// }

//const getDisciplina =
routerDisciplinas.get('/disciplinas', (req, res) => {
    res.json(list_Disciplinas)
})

routerDisciplinas.post('/disciplinas', (req, res) => {
    const novaDisciplina = {
        id: uuidv4(),
        titulo: req.body.titulo,
        modulo: req.body.modulo
    }

    const verificaSeExiste = list_Disciplinas.find(item => item.titulo === req.body.titulo)
    if (verificaSeExiste) {
        return res.status(403).json({ message: 'Disciplina já existe na lista ' })
    }

    list_Disciplinas.push(novaDisciplina)
    res.status(201).json({ message: 'Disciplina criada com sucesso' })

})

routerDisciplinas.delete('/disciplinas/:id', (req, res) => {
    const listAtualizada = list_Disciplinas.filter(item => item.id != req.params.id)
    res.json(listAtualizada)
})


app.use(routerDisciplinas)
app.listen(PORT, console.log(`Servidor rodando com sucesso ${PORT}`))
