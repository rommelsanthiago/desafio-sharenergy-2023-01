import express from "express";
import { CustumerBusiness } from "../../business/CustumerBusiness";
import { CustumerDatabase } from "../../data/CustumerDatabase";
import { CustumerController } from "../CustumerController";

export const custumerRouter = express.Router()

const custumerDatabase = new CustumerDatabase()
const custumerBusiness = new CustumerBusiness(custumerDatabase)
const custumerController = new CustumerController(custumerBusiness)

custumerRouter.post('/createCustumer', (req, res)=> custumerController.createCustumer(req, res))
