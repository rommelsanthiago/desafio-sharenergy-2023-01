import { Request, Response } from "express";
import { CustomerBusiness } from "../business/CustomerBusiness";
import { CustomerInputDTO, UpdateCustomerInputDTO } from "../model/Customer";

export class CustomerController {
    constructor(private customerBusiness: CustomerBusiness){}

    public getCustomers =async (req: Request, res: Response) => {
      try {
        const token = req.headers.authorization as string;

        const customers = await this.customerBusiness.getCustomers(token);
        
        res.status(200).send(customers);
      } catch (error: any) {
        res.status(400).send(error.message);
      };
    };

    public createCustomer = async (req: Request, res: Response) => {
      try {
        const { name, email, phone, cpf, address } = req.body;
        const token = req.headers.authorization as string;

        const input: CustomerInputDTO = {
          name,
          email,
          phone,
          cpf,
          address
        };

        await this.customerBusiness.createCustomer(input, token);

        res.status(201).send({ message: `Cliente ${input.name} criado com sucesso!`});
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };

    public updateCustomer = async (req: Request, res: Response) => {
      try {
        const token = req.headers.authorization as string
        const input: UpdateCustomerInputDTO = {
          id: req.params.id,
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          cpf: req.body.cpf,
          address: req.body.address
        };

        await this.customerBusiness.updateCustomer(input, token);
  
        res.status(201).send({ message: `Cliente atualizado com sucesso!` });
      } catch (error: any) {
        res.status(400).send(error.message);
      };
    };

    public deleteCustomer =async (req: Request, res: Response) => {
      try {
        const token = req.headers.authorization as string;
        const id = req.params.id as string;

        await this.customerBusiness.deleteCustomer(id, token);
        
        res.status(201).send({ message: `Cliente deletado com sucesso!` });
      } catch (error: any) {
        res.status(400).send(error.message);
      };
    };
};
