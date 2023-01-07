import mongoose from "mongoose";
import { CustumerRepository } from "../business/CustumerRepository";
import { CustomError } from "../errors/customErros";
import { Custumer } from "../model/Custumer";
import { BaseDatabase } from "./BaseDatabase";
import "../model/Custumer";

const CUSTUMER = mongoose.model('custumer');

export class CustumerDatabase extends BaseDatabase implements CustumerRepository {
    public createCustumer = async (custumer: Custumer) => {
      try {
        
        await CustumerDatabase.connection;
        await CUSTUMER.create(custumer);

      } catch (error: any) {
        throw new CustomError(400, error.message);
      }
    };
};
