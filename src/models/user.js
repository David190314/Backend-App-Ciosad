import _sequelize from 'sequelize';
import endowment from './endowment.js';
const { Model, Sequelize } = _sequelize;

export default class user extends Model {
  static init(sequelize, DataTypes) {
  super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    secondname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true,
      }
    },
    secondsurname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "user_email_key",
      validate: {
        isEmail : true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    costcenter: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('now')
    },
    administrator: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },{
    sequelize,
    tableName: 'user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return user
  }
}


