import mongoose from "mongoose";
import { CustomerRepository } from "../business/CustomerRepository";
import { CustomError } from "../errors/customErros";
import { Customer, UpdateCustomerInputDTO } from "../model/Customer";
import { BaseDatabase } from "./BaseDatabase";
import "../model/Customer";

const CUSTOMER = mongoose.model('customer');

export class CustomerDatabase extends BaseDatabase implements CustomerRepository {
    public createCustomer = async (customer: Customer) => {
      try {
        
        await CUSTOMER.create(customer);

      } catch (error: any) {
        throw new CustomError(400, error.message);
      };
    };

    public getCustomerById = async (id: string) => {
      try {
        const customer = await CUSTOMER.findOne({id: id});
          
        return customer;
      } catch (error: any) {
        throw new CustomError(400, error.message);
      };
    };

    public updateCustomer = async (id: string, customer: UpdateCustomerInputDTO) => {
      try {

        await CUSTOMER.updateOne({ id: id }, customer);

      } catch (error: any) {
        throw new CustomError(400, error.message);
      };
    };

    public deleteCustomer = async (id: string) => {
      try {

        await CUSTOMER.findOneAndDelete({id: id});
        
      } catch (error: any) {
        throw new CustomError(400, error.message);
      };
    };
};
