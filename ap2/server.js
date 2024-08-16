const express = require('express')
const router = express.Router()
const cors = require('cors')

const users = []

const app = express()

app.use(express.json())
app.use(cors())

const getUsers = router.get('/users', (req, res) => {
    res.status(200).json(users)
})


const createUser = router.post('/users', (req, res) => {
    const user = {
        id: req.body.id,
        name: req.body.name
    }

    //const usersUpdate = 
    users.push(user)

    res.status(201).json({ message: `User ${user.name} criado com sucesso!` })
})

app.use(createUser)
app.listen(3333, console.log('Servidor rodando com sucesso'))
