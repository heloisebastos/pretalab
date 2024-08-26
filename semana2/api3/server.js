const express = require('express')
const routerDisciplinas = express.Router()
const cors = require('cors')
const PORT = 3333

const { v4: uuidv4 } = require('uuid');


const app = express()
app.use(express.json())
app.use(cors())

const list_Disciplinas = []


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

routerDisciplinas.put('/disciplinas/:id', (req, res) => {
    const encontraDisciplina = list_Disciplinas.find(item => item.id === req.params.id)

    if (!encontraDisciplina) {
        res.status(404).json({ message: 'Item não encontrado' })
    }

    encontraDisciplina.titulo = req.body.titulo
    encontraDisciplina.modulo = req.body.modulo

    res.json({ message: `Disciplina ${req.body.titulo} alterada com sucesso` })

})

routerDisciplinas.patch('/disciplina/:id', (req, res) => {
    const { titulo, modulo } = req.body

    let encontraDisciplina = list_Disciplinas.find(item => item.id === req.params.id)

    if (!encontraDisciplina) {
        res.status(404).json({ message: 'Item não encontrado' })
    }

    if (titulo != null) {
        encontraDisciplina.titulo = titulo

    }

    if (modulo != null) {
        encontraDisciplina.titulo = modulo

    }


    res.json({ message: `Disciplina ${req.body.titulo} alterada com sucesso` })

})

routerDisciplinas.delete('/disciplinas/:id', (req, res) => {
    const listAtualizada = list_Disciplinas.filter(item => item.id != req.params.id)
    res.json(listAtualizada)
})


app.use(routerDisciplinas)
app.listen(PORT, console.log(`Servidor rodando com sucesso ${PORT}`))
