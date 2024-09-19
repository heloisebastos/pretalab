const TextServices = require("../services/textServices")

const createPost = (req, res) => {
    const { title, content, status, author } = req.body
    const newText = TextServices.createText({ title, content, status, author })

    res.status(201).json({ message: `Texto ${newText.title} criado com sucesso` })

}

const listPosts = (req, res) => {
    const texts = TextServices.getAllTexts()
    res.json(texts)
}

const listPost = (req, res) => {
    const { id } = req.query

    const text = TextServices.getTextById(id)

    if (!text) {
        res.status(404).json({ message: `Text com ID ${id} não encontrado` })
    }

    res.json(text)
}


const deletePost = (req, res) => {
    const { id } = req.params

    const listUpdated = TextServices.getListByFilterId(id)

    res.json(listUpdated)
}

const editPost = (req, res) => {
    const { id } = req.params
    const { title, content, status, author } = req.body

    const listUpdated = TextServices.getTextEditById(id, { title, content, status, author })

    res.json(listUpdated)
}

module.exports = { createPost, listPosts, listPost, deletePost, editPost }