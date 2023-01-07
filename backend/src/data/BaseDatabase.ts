import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { connect } from 'http2';

dotenv.config()

mongoose.set("strictQuery", true);

export class BaseDatabase {
    protected static connection = mongoose.connect(process.env.MONGODB_URI!)
}
