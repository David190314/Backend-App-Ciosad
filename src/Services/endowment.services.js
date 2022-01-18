import Models from "../models/init-models.js";

const { endowment, user } = Models();

export default class endowmentServices {
  static async getAll() {
    try {
      const dataEndowment = await endowment.findAll({
        order: [["id", "DESC"]]
      });
      return dataEndowment;
    } catch (error) {
      throw error;
    }
  }

  static async insert(obj) {
    try {
      const insertEndowment = await endowment.create(obj);
      return insertEndowment;
    } catch (error) {
      const { name } = error;
      if (name === "SequelizeDatabaseError") {
        throw "Valide que los campos requeridos sean correctos";
      }
    }
  }
}
