import { app } from "./controllers/app";
import { custumerRouter } from "./controllers/routes/CustumerRoutes";
import { userRouter } from "./controllers/routes/UserRoutes";

app.use('/custumer/', custumerRouter);
app.use('/user/', userRouter);
