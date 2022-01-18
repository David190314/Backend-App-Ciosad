import dotenv from 'dotenv'
dotenv.config()
export default {
  development: {
    username: process.env.USERNAME_DB,
    password: process.env.PASWWORD_DB,
    database: process.env.DB_CLIENTE,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_development',
    host: '127.0.0.1',
    dialect: 'mysql'
  }
}
