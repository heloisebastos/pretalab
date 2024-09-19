const { MarkdownFormatter, HTMLFormatter, contentFormatter } = require('./strategy')

const formatter = new contentFormatter()

formatter.setStrategy(new MarkdownFormatter())
console.log(formatter.format('Este é o conteúdo do post'))