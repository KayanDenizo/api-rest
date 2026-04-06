// Um erro lançado por nos, um erro mais especifico, por isso o tratamento de erro
class AppError {
    message: string
    statusCode: number

    constructor(message: string, statusCode: number = 400) {
        this.message = message
        this.statusCode = statusCode
    }
}

export { AppError }