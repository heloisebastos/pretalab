
class TextStorage {
    constructor() {
        if (!TextStorage.instance) {
            this.texts = []
            TextStorage.instance = this
        }

        return TextStorage.instance
    }

    add(text) {
        this.texts.push(text)
    }

    getAll() {
        return this.texts
    }


    getById(id) {
        return this.texts.find(text => text.id === id)
    }

    getFilterById(id) {
        return this.texts.filter(text => text.id !== id)

    }

    getEditById(id, { title, content, status, author }) {
        const textFound = this.texts.find(text => text.id === id)

        if (!textFound) {
            return res.status(404).json({ message: `Texto com o ${id} não encontrado` })
        }

        if (title != null) {
            return textFound.title = title
        }

        if (content != null) {
            return textFound.content = content
        }

        if (status != null) {
            return textFound.status = status
        }

        if (author != null) {
            return textFound.author = author
        }
    }
}

module.exports = new TextStorage()