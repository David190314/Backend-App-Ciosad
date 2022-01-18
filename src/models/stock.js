import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class stock extends Model {
  static init(sequelize, DataTypes) {
    super.init(
      {
        id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        stock: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        assigned: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        available: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: true
        },
      },
      {
        sequelize,
        tableName: "stock",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "stock_pkey",
            unique: true,
            fields: [{ name: "id" }]
          }
        ]
      }
    );
    return stock;
  }
}
