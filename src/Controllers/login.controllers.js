import authService from "../Services/auth.services.js";
import userServices from "../Services/user.services.js";
import bcrypt from "bcryptjs";

export const userLogin = async (req, res) => {
  const { id, password } = req.body;
  const searchUser = await userServices.getById(id);
  searchUser
    ? bcrypt.compare(
        password,
        searchUser.password,
        async function (err, response) {
          if (response) {
            try {
              const user = await authService.login(searchUser.id, searchUser);
              res.status(200).json(user);
            } catch (error) {
              throw error
            }
          } else {
            res.status(403).json({ message: "Usuario o contraseña incorrecto" });
          }
        }
      )
    : res.status(403).json({ message: "User does not exist" });
};
