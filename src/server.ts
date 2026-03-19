// Subir servidor, criar GET /products, POST e usar query e body
import express, { response } from "express";
import { routes } from "./routes";

const PORT = 3333; // Boa pratica pois se futuramente quiser mudar a porta fica mais facil

const app = express(); // Inicializa o servidor Express

app.use(express.json()) 

app.use(routes)

app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
