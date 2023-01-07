import { Request, Response } from "express";
import { CustumerBusiness } from "../business/CustumerBusiness";
import { CustumerInputDTO } from "../model/Custumer";

export class CustumerController {
    constructor(private custumerBusiness: CustumerBusiness){}

    public createCustumer = async (req: Request, res: Response) => {
      try {
        const { name, email, phone, cpf, address } = req.body;

        const input: CustumerInputDTO = {
          name,
          email,
          phone,
          cpf,
          address
        };

        await this.custumerBusiness.createCustumer(input);

        res.status(201).send({ message: `Cliente ${input.name} criado com sucesso!`});
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };
};
