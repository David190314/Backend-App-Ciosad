import { Router } from "express";
import { getEndowment, createEndowment } from "../Controllers/endowment.controllers.js"
const routes = Router()

routes.get('/endowment', getEndowment)
routes.post('/endowment/accept', createEndowment)

export default routes;