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

        // throw new Error("Errro de exemplo")
        throw new AppError("Erro ao tentar criar um produto!")

        response.status(201).json({ name, price, user_id: request.user_id })
    }

}

export { ProductsController }