import _sequelize from 'sequelize';
import user from './user.js';
const { Model, Sequelize } = _sequelize;

export default class endowment extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    amount:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'endowment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "endowment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return endowment
  }
}
