// Subir servidor, criar GET /products, POST e usar query e body
import express, { Request, Response, NextFunction } from "express";
import { routes } from "./routes";
import { AppError } from "./utils/AppError";

const PORT = 3333; // Boa pratica pois se futuramente quiser mudar a porta fica mais facil

const app = express(); // Inicializa o servidor Express

app.use(express.json())

app.use(routes)

app.use((error: any, request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({ message: error.message })
    }
    response.status(500).json({ message: "Erro no servidor" })

})

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))