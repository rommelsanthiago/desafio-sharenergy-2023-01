import { Custumer } from "../model/Custumer"

export interface CustumerRepository {
    createCustumer(custumer: Custumer): Promise<void>
}