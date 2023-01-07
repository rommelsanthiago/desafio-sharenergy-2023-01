import express from "express";
import { CustomerBusiness } from "../../business/CustomerBusiness";
import { CustomerDatabase } from "../../data/CustomerDatabase";
import { CustomerController } from "../CustomerController";

export const customerRouter = express.Router()

const customerDatabase = new CustomerDatabase()
const customerBusiness = new CustomerBusiness(customerDatabase)
const customerController = new CustomerController(customerBusiness)

customerRouter.post('/createCustomer', (req, res)=> customerController.createCustomer(req, res))
customerRouter.put('/updateCustomer/:id', (req, res)=> customerController.updateCustomer(req, res))

