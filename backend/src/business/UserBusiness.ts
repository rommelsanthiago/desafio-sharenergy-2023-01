import { CustomError, InvalidName, InvalidPassword } from "../errors/customErros";
import { User, UserInputDTO } from "../model/User";
import { UserRepository } from "./UserRepository";

import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/HashGenerator";
import { Authenticator } from "../services/Authenticator";

const idGenerator = new IdGenerator();
const hashGenerator = new HashGenerator();
const authenticator = new Authenticator();

export class UserBusiness {
    constructor(private userDatabase: UserRepository) {}
    
    public signup = async (input: UserInputDTO): Promise<string> => {
      try {
        let { username, password, role } = input;
  
        if (!username || !password) {
          throw new CustomError(
            400,
            'Preencha os campos "username" e "password"'
          );
        };
  
        if (username.length < 4) {
          throw new InvalidName();
        };
  
        if (password.length < 6) {
          throw new InvalidPassword();
        };

        if (role !== "normal" && role !== "admin"){
            role = "normal"
        };
  
        const id: string = idGenerator.generateId();
  
        const hashPassword = await hashGenerator.generateHash(password)
  
        const user: User = {
          id,
          username,
          password: hashPassword,
          role
        };
        
        await this.userDatabase.createUser(user);
  
        const token = authenticator.generateToken({id, role});
        return token;
      } catch (error: any) {
        throw new CustomError(400, error.message);
      };
    };
};
  