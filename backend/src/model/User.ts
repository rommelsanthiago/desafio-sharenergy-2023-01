import mongoose from 'mongoose';

export type User = {
    id: string
    username: string,
    password: string,
    role: string
 };
 
 export interface UserInputDTO {
    username: string,
    password: string,
    role: string
 };

 export interface LoginInputDTO {
    username: string,
    password: string
 }

const USER = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

mongoose.model('user', USER);
