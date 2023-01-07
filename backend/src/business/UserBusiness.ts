import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../errors/customErros";
import { LoginInputDTO, User, UserInputDTO } from "../model/User";
import { UserRepository } from "./UserRepository";

import { IdGenerator } from "../services/idGenerator";
import { HashGenerator } from "../services/HashGenerator";
import { AuthenticationData, Authenticator } from "../services/Authenticator";

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

    public login = async (input: LoginInputDTO): Promise<string> => {
        try {
          const { username, password } = input;
    
          if (!username || !password) {
            throw new CustomError(400, 'Preencha os campos "username" e "password"');
          };
    
          const user = await this.userDatabase.findUserByUsername(username);
    
          if (!user) {
            throw new UserNotFound();
          };
    
          const hashCompare = await hashGenerator.compareHash(password, user.password)
    
          if (!hashCompare) {
            throw new InvalidPassword()
          }
    
          const payload: AuthenticationData = {
            id: user.id,
            role: user.role as string
          }
    
          const access_token = authenticator.generateToken(payload);
    
          return access_token;
        } catch (error: any) {
          throw new CustomError(400, error.message);
        };
      };
};
  