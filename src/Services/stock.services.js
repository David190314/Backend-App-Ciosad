import Models from "../models/init-models.js";

const { stock } = Models();

export default class stockServices {
  static async getAll() {
    try {
      const dataStock = await stock.findAll({
        order: [["created_at", "DESC"]]
      });
      return dataStock;
    } catch (error) {
      throw error;
    }
  }

  static async insert(obj) {
    try {
      const newregister = await stock.create(obj);
      return newregister;
    } catch (error) {
      throw error;
    }
  }

  static async updateStock(obj, id) {
    try {
      const updateStock = await stock.update(obj, { where: { id } });
      return updateStock;
    } catch (error) {
      const { name } = error;
      if (name === "SequelizeDatabaseError") {
        throw "Valide que los campos requeridos sean correctos";
      }
    }
  }
}
