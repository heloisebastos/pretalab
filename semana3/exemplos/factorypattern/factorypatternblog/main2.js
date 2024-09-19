const PostFactory = require('./factory2')


const article = PostFactory.createPost('artigo', 'Introdução ao Node.js', 'Node.js é um ambiente de execução de JavaScript')
console.log(article.getDetails())

const noticia = PostFactory.createPost('news', 'lançamento do projeto Aprofunda', 'Aprofunda é um programa desenvolvimento de carreira para mulheres na área de tecnologia ')
console.log(noticia.getDetails())