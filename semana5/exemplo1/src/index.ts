import express, { Request, Response } from 'express'

export const app = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello,Typescript + Express')
})


if (require.main === module) {
    const port = 333

    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost${port}`)
    })

}
