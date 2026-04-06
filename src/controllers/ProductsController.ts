import { Request, Response } from "express"
import { AppError } from "../utils/AppError"
class ProductsController {
    /**
     * index - GET para listar varios registros
     * show - GET para exibir um registro específico
     * create - POST para criar um registro
     * update - PUT para atualizar um registro
     * remove - DELETE para deletar um registro
     */

    index(request: Request, response: Response) {
        //get
        const { page, limit } = request.query // parametros nomeados
        response.send(`Produto ${page} de ${limit}`)
    }

    create(request: Request, response: Response) {
        const { name, price } = request.body

        if (!name) {
            throw new AppError("Nome do Produto é obrigatório!") // requisição ruim
        }

        if (name.trim.length < 6) {
            throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres") // requisição ruim

        }

        if (!price) {
            throw new AppError("Preço é obrigatório!") // requisição ruim
        }

        if (price < 0) {
            throw new AppError("Preço não pode ser menor que 0") // requisição ruim
        }

        // throw new Error("Errro de exemplo")
        throw new AppError("Erro ao tentar criar um produto!")

        response.status(201).json({ name, price, user_id: request.user_id })
    }

}

export { ProductsController }