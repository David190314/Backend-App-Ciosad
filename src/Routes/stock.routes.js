import { Router } from "express";
import { getStock, createStock } from "../Controllers/stock.controllers.js";
const routes = Router()

routes.get('/stock', getStock);
routes.post('/register/stock', createStock);


export default routes