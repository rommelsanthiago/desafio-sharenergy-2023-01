import mongoose from 'mongoose';

export type Customer = {
    id: string
    name: string,
    email: string,
    cpf: string,
    phone: string,
    address: string,
    authorId: string
 };

 export interface Customers {
    id: string
    name: string,
    email: string,
    cpf: string,
    phone: string,
    address: string,
    authorId: string,
    createdAt: Date
 }
 
 export interface CustomerInputDTO {
    name: string,
    email: string,
    cpf: string,
    phone: string,
    address: string,
 };

 export interface UpdateCustomerInputDTO {
    id: string,
    name?: string,
    email?: string,
    cpf?: string,
    phone?: string,
    address?: string,
 };

 const CUSTOMER = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

mongoose.model('customer', CUSTOMER);