import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO, UserInputDTO } from "../model/User";

export class UserController {
    constructor(private userBusiness: UserBusiness){}

    public signup = async (req: Request, res: Response) => {
      try {
        const { username, password, role } = req.body;

        const input: UserInputDTO = {
          username,
          password,
          role
        };

        const token = await this.userBusiness.signup(input);

        res.status(201).send({ message: `Usuário ${input.username} criado com sucesso!`, token });
      } catch (error: any) {
        res.status(400).send(error.message);
      }
    };

    public login = async (req: Request, res: Response) => {
        try {
          const { username, password } = req.body;
    
          const input: LoginInputDTO = {
            username,
            password,
          };

          const access_token = await this.userBusiness.login(input);
    
          res.status(200).send({access_token});
        } catch (error: any) {
          res.status(400).send(error.message);
        }
    };
};
