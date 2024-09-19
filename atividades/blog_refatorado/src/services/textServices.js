const TextFactory = require('./textFactory')
const TextStorage = require('../utils/textStoragy')
module.exports = {
    createText: ({ title, content, status, author }) => {
        const newText = TextFactory.create({ title, content, status, author })
        TextStorage.add(newText)
        return newText
    },

    getAllTexts: () => {
        return TextStorage.getAll()
    },

    getTextById: (id) => {
        return TextStorage.getById(id)
    },

    getListByFilterId: (id) => {
        return TextStorage.getFilterById(id)
    },

    getTextEditById: (id, { title, content, status, author }) => {
        return TextStorage.getEditById(id, { title, content, status, author })

    }

}