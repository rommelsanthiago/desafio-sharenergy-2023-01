import mongoose from 'mongoose';

export type Custumer = {
    id: string
    name: string,
    email: string,
    cpf: string,
    phone: string,
    address: string,
    authorId: string
 };
 
 export interface CustumerInputDTO {
    name: string,
    email: string,
    cpf: string,
    phone: string,
    address: string,
 };

 const CUSTUMER = new mongoose.Schema({
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

mongoose.model('custumer', CUSTUMER);