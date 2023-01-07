export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidUsername extends CustomError{ 
    constructor(){
        super(400, "Username inválido, deve ter ao menos 4 caracteres")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida, deve ter ao menos 6 caracteres")
    }
}

export class InvalidCredentials extends CustomError{
    constructor(){
        super(400, "Usuário ou senha inválida")
    }
}

export class UserNotFound extends CustomError{ 
    constructor(){
        super(404, "Usuário não encontrado")
    }
}

export class CustomerNotFound extends CustomError{ 
    constructor(){
        super(404, "Cliente não encontrado")
    }
}

export class Unauthorized extends CustomError{ 
    constructor(){
        super(401, "Usuário não authorizado, faça login novamente")
    }
}

export class UnathorizedUser extends CustomError{ 
    constructor(){
        super(401, "Usuário não autorizado, apenas administradores podem fazer alterações")
    }
}