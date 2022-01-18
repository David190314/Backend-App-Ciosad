import express from "express";
import cors from "cors";
import userRoutes from "../src/Routes/user.routes.js";
import endowmentRoutes from "../src/Routes/endowmetn.routes.js";
import stockRoutes from "../src/Routes/stock.routes.js";
import loginRotes from "../src/Routes/login.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(endowmentRoutes);
app.use(userRoutes);
app.use(stockRoutes);
app.use(loginRotes);

export default app;
