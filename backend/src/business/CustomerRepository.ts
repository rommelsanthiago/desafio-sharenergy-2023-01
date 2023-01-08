import { Customer, Customers, UpdateCustomerInputDTO } from "../model/Customer"

export interface CustomerRepository {
    createCustomer(customer: Customer): Promise<void>
    getCustomerById(id: string): Promise<Customer>
    updateCustomer(id: string, updateCustomerInputDTO: UpdateCustomerInputDTO): Promise<void>
    deleteCustomer(id: string): Promise<void>
    getCustomers(): Promise<Customers[]>
}