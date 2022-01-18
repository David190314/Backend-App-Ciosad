import { Router } from "express";
import { getUsers, createUser, userId, updateUser } from "../Controllers/user.controllers.js";

const routes = Router()

routes.get('/users', getUsers)
routes.get('/user/:id', userId)
routes.post('/register', createUser)
routes.put('/user/:id', updateUser)


export default routes;