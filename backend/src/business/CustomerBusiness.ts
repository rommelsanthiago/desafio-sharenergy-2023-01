import { 
  CustomError, 
  CustomerNotFound, 
  InvalidEmail, 
  InvalidName, 
  UnathorizedUser, 
  Unauthorized 
} from "../errors/customErros";
import { Customer, CustomerInputDTO, UpdateCustomerInputDTO } from "../model/Customer";
import { CustomerRepository } from "./CustomerRepository";

import { IdGenerator } from "../services/idGenerator";
import { Authenticator } from "../services/Authenticator";

const idGenerator = new IdGenerator();
const authenticator = new Authenticator();

export class CustomerBusiness {
    constructor(private customerDatabase: CustomerRepository) {}

    public createCustomer = async (input: CustomerInputDTO, token: string): Promise<string> => {
      try {
        let { name, email, phone, address, cpf } = input;
        const tokenData = authenticator.getTokenData(token)
      
        if(!tokenData || !tokenData.id) {
          throw new Unauthorized()
        }

        if(tokenData.role !== "admin") {
          throw new UnathorizedUser()
        }
  
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
  
        const customer: Customer = {
          id,
          name,
          email,
          phone,
          cpf,
          address,
          authorId: tokenData.id
        };
        
        await this.customerDatabase.createCustomer(customer);
  
        return `Cliente ${name}, criado com sucesso!`;
      } catch (error: any) {
        throw new CustomError(400, error.message);
      };
    };

    public updateCustomer = async (input: UpdateCustomerInputDTO, token: string) => {
      try {
        const { id, name, email, phone, cpf, address } = input;
        const tokenData = authenticator.getTokenData(token)
      
        if(!tokenData) {
          throw new Unauthorized()
        }

        if(tokenData.role !== "admin") {
          throw new UnathorizedUser()
        }
  
        if (!id) {
          throw new CustomError(
            400,
            'Preencha o "id" do cliente'
          );
        };
  
        if (name) {
          if(name.length < 4) throw new InvalidName();
        };
  
        const customerExist = await this.customerDatabase.getCustomerById(id)
        if(!customerExist){
          throw new CustomerNotFound()
        }
  
        const updateCustomerInput: UpdateCustomerInputDTO = {
          id,
          name,
          email, 
          phone, 
          cpf, 
          address
        };
  
        await this.customerDatabase.updateCustomer(id, updateCustomerInput);
  
      } catch (error: any) {
        throw new CustomError(400, error.message);
      };
    };  

    public deleteCustomer =async (id: string, token: string) => {
      try {
        const tokenData = authenticator.getTokenData(token)
      
        if(!tokenData) {
          throw new Unauthorized()
        }

        if(tokenData.role !== "admin") {
          throw new UnathorizedUser()
        }

        if (!id) {
          throw new CustomError(
            400,
            'Preencha o "id" do cliente'
          );
        };

        const customerExist = await this.customerDatabase.getCustomerById(id)

        if(!customerExist){
          throw new CustomerNotFound()
        }

        await this.customerDatabase.deleteCustomer(id)
        
      } catch (error: any) {
        throw new CustomError(400, error.message);
      };
    };
};
