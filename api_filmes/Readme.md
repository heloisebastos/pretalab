# API de Filmes

## Descrição

Projeto API Filmes do Aprofunda PretaLab , realizado pela [Olabi](https://www.olabi.org.br/) em parceria com a [Disney](https://www.disney.com.br/), formação técnica em Back-End. O projeto é uma a API de filmes.

<img src="/APIFILMES.gif">

## Ferramentas

- [JavaScript](https://www.javascript.com/)
- [Insomnia](https://insomnia.rest/download)
- [IDE](https://code.visualstudio.com/download)

### Rotas da API Filmes (/filmes)

| Método | Rota                                | Função                                            |
| ------ | ----------------------------------- | ------------------------------------------------- |
| POST   | /filmes/create                      | Operação de cadastro de novo fimes                |
| GET    | /filmes                             | Operação buscar todos os filmes cadastrados       |


#### [POST] filmes/create

- **Descrição**: Operação de cadastro de novo filme. Requer o envio dos dados do filme pelo body.

- **Exemplo de body**:

```json
{

"name" : "Estrela Além do Tempo",
"description": "é um filme baseado em fatos reais que narra a história de três brilhantes matemáticas afro-americanas na Nasa durante a década de 1960",
"status" : true

}

```