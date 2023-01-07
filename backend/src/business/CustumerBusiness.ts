import { CustomError, InvalidEmail } from "../errors/customErros";
import { Custumer, CustumerInputDTO } from "../model/Custumer";
import { CustumerRepository } from "./CustumerRepository";

import { IdGenerator } from "../services/idGenerator";

const idGenerator = new IdGenerator();

export class CustumerBusiness {
    constructor(private userDatabase: CustumerRepository) {}

    public createCustumer = async (input: CustumerInputDTO): Promise<string> => {
      try {
        let { name, email, phone, address, cpf } = input;
  
        if (!name || !phone || !email || !address || !cpf) {
          throw new CustomError(
            400,
            'Campos obrigatorios "nome", "email", "telefone", "endereço" e "cpf"'
          );
        };
  
        const checkEmail = (email: string) => {
          let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
          return regex.test(email);
        };
  
        if (!checkEmail(email)) {
            throw new InvalidEmail();
        };
  
        const id: string = idGenerator.generateId();
  
        const custumer: Custumer = {
          id,
          name,
          email,
          phone,
          cpf,
          address
        };
        
        await this.userDatabase.createCustumer(custumer);
  
        return `Cliente ${name}, criado com sucesso!`;
      } catch (error: any) {
        throw new CustomError(400, error.message);
      };
    };
}  