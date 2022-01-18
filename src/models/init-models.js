import _sequelize from "sequelize";
import _endowment from  "./endowment.js";
import _stock from  "./stock.js";
import _user from  "./user.js";
import config from '../config/config.js'
import dotenv from 'dotenv'

dotenv.config()

const { DataTypes } = _sequelize;

export default function initModels(sequelize) {
  const env = process.env.NODE_ENV || 'development'
  const configObj = config[env]

  if (config.use_env_variable) {
    sequelize = new _sequelize(process.env[config.use_env_variable], config);
  } else {
    sequelize = new _sequelize(
      configObj.database,
      configObj.username,
      configObj.password,
      configObj
      );
  }

  const endowment = _endowment.init(sequelize, DataTypes);
  const stock = _stock.init(sequelize, DataTypes);
  const user = _user.init(sequelize, DataTypes);

  endowment.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(endowment, { as: "endowments", foreignKey: "user_id"});

  return {
    endowment,
    stock,
    user,
  };
}
