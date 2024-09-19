const express = require('express')
const cors = require('cors')

blogRoutes = require('./src/routes/blogRoutes')

const app = express()
const PORT = 3333

app.use(express.json())
app.use(cors())
app.use(blogRoutes)

app.listen(PORT, console.log(`Servidor rodando com sucesso ${PORT}`))