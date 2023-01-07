import mongoose from "mongoose";
import { UserRepository } from "../business/UserRepository";
import { CustomError } from "../errors/customErros";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";
import "../model/User";

const USER = mongoose.model('user');

export class UserDatabase extends BaseDatabase implements UserRepository {
    public createUser = async (user: User) => {
      try {
        
        await UserDatabase.connection;
        await USER.create(user);

      } catch (error: any) {
        throw new CustomError(400, error.message);
      }
    };
};
