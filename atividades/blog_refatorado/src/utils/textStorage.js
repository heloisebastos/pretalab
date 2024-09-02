
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

  deleteId(id) {
    return this.texts.filter(post => post.id !== id)
  }
}

module.exports = new TextStorage()