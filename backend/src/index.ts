import { app } from "./controllers/app";
import { customerRouter } from "./controllers/routes/CustomerRoutes";
import { userRouter } from "./controllers/routes/UserRoutes";

app.use('/customer/', customerRouter);
app.use('/user/', userRouter);
