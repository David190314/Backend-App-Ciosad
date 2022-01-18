import Models from "../models/init-models.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const { user } = Models();

export default class authService {
  static async login(id, userJwt) {
    try {
      const result = await user.findOne({
        where: { id },
        attributes: { exclude: ["created_at", "updated_at"] }
      });
      const userPaylod = {
        id: userJwt.id,
        firstname: userJwt.firstname,
        secondname: userJwt.secondname,
        surname: userJwt.surname,
        secondsurname: userJwt.secondsurname,
        email: userJwt.email, 
        administrator: userJwt.administrator,
      };
      const loginJwt = await jwt.sign(userPaylod, process.env.SECRETJWT, {
        algorithm: 'HS384',
        expiresIn: '1h'
      })
      const userLogin = {
        ...userPaylod,
        token: loginJwt
      }
      return userLogin
    } catch (error) {
      throw error
    }
  }

  static async signJWT(userObj) {}
}
